'use strict'

var url = require('url')
var TypedError = require('error/typed')

module.exports = assertPathSegments

function assertPathSegments (req, res, callback) {
  var path = url.parse(req.url).pathname

  if (/\/\//.test(path)) {
    return callback(new PathError({
      url: req.url
    }))
  }

  callback()
}

var PathError = TypedError({
  type: 'request.path',
  message: 'Invalid request path (empty path segment): {url}',
  statusCode: 400
})
