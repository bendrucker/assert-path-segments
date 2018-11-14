'use strict'

var test = require('tape')
var inject = require('shot').inject
var assertPath = require('./')

test('valid path', function (t) {
  inject(dispatch, { url: '/boop' }, t.fail)

  function dispatch (req, res) {
    assertPath(req, res, t.end)
  }
})

test('invalid path', function (t) {
  t.plan(3)

  inject(dispatch, { url: '/beep//boop' }, t.fail)

  function dispatch (req, res) {
    assertPath(req, res, function (err) {
      t.ok(err)
      t.equal(err.type, 'request.path')
      t.equal(err.statusCode, 400)
    })
  }
})

test('// in query', function (t) {
  inject(dispatch, { url: '/beep?url=http://bo.op' }, t.fail)

  function dispatch (req, res) {
    assertPath(req, res, t.end)
  }
})
