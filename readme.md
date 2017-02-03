# assert-path-segments [![Build Status](https://travis-ci.org/bendrucker/assert-path-segments.svg?branch=master)](https://travis-ci.org/bendrucker/assert-path-segments)

> HTTP middleware that validates that no empty path segments (//) are present


## Install

```
$ npm install --save assert-path-segments
```


## Usage

```js
var assertPathSegments = require('assert-path-segments')

server.on('request', function (req, res) {
  assertPathSegments(req, res, function (err) {
    if (!err) return res.end('ok!')
    res.end(err.message)
  })
})
```

## API

#### `assertPathSegments(req, res, callback)` -> `undefined`

##### req

*Required*  
Type: `object`

An HTTP request object.

##### res

*Required*  
Type: `object`

An HTTP response object.

##### callback

*Required*  
Type: `function`  
Arguments: `err`

A callback that will be called with an error if the path contains empty segments. If the path is valid, the callback will be called with no arguments.


## License

MIT © [Ben Drucker](http://bendrucker.me)
