var http = require('http')
var https = require('https')
var util = require('util')

const rp = require('request-promise')

var Client = function (opts) {
  this.opts = opts || {}
  this.http = this.opts.ssl ? https : http
}

const isTrue = (...conditions) => 
  conditions.reduce((result, cond) => result && cond, true)

const reqOnError = (cbCalled, reqTimeout, errback) => (err) => {
  if (cbCalled) return
  cbCalled = true
  clearTimeout(reqTimeout)
  return errback(err)
}

const getReject = (self) => self.opts.ssl && self.opts.sslStrict !== false
const getRequestOptions = (
  self, 
  path = '/', 
  requestJSON, 
  method = 'POST', 
  agent = false) => ({
    host: self.opts.host || 'localhost',
    port: self.opts.port || 9332,
    method,
    path,
    headers: {
      'Host': self.opts.host || 'localhost',
      'Content-Length': requestJSON.length
    },
    agent,
    rejectUnauthorized: getReject(self)
  })

const getTimetout = (self, cbCalled, request, errback, errMsg = 'ETIMEDOUT') => 
  setTimeout( () => {
    if (cbCalled) return true
    cbCalled = true
    request.abort()
    var err = new Error(errMsg)
    err.code = errMsg
    return errback(err)
  }, self.opts.timeout || 30000)

const getRequestJSONArray = (method, time) => 
  method.map( (batchCall, i) => ({
    id: time + '-' + i,
    method: batchCall.method,
    params: batchCall.params
    })
  )

const getRequestJSONObject = (method, time, params) => ({
    method,
    params
})

const getRequestJSON = (method, time, params) => 
  JSON.stringify((Array.isArray(method)) 
    ? getRequestJSONArray(method, time)
    : getRequestJSONObject(method, time, params))
  // }

const cbErrorBack = (decodedResponse, errback) => {
  const err = new Error(decodedResponse.error.message || '')
  if (decodedResponse.error.code) {
    err.code = decodedResponse.error.code
  }
  return errback(err)
}


const returnErrorBack = ({ message, code }) => {
  err = new Error('Problem parsing JSON response from server')
  err.code = -32603
  return err
}
  // return JSON.stringify(requestJSON)
const toDecodedResponse = (response, callback, errback) => (decodedResponse, i) => {
  if (isTrue(decodedResponse.hasOwnProperty('error'), decodedResponse.error != null)) {
    if (errback) return cbErrorBack(decodedResponse, errback)
  } else if (decodedResponse.hasOwnProperty('result')) {
    if (callback) return callback(decodedResponse.result, response.headers)
  } else {
    if (errback) return cbErrorBack(decodedResponse, errback)
    
  }
}

const returnError = (response, err) => {
  if (response.statusCode !== 200) {
    return errback(
      returnErrorBack({
        message: 'Invalid params, response status code: ' + response.statusCode,
        code: -32602
      })
    )
    // err = new Error('Invalid params, response status code: ' + response.statusCode)
    // err.code = -32602
    // errback(err)
  } else {
    return errback(
      returnErrorBack({
        message: 'Problem parsing JSON response from server',
        code: -32603
      })
    )
  }
}
Client.prototype.call = function (method, params, callback, errback, path) {
  var time = Date.now()
  const requestJSON = getRequestJSON(method, time, [params]) 
  // const requestOptions = getRequestOptions(this, path, requestJSON)
  console.log('------------------------------------');
  console.log('requestJSON: ', requestJSON);
  const requestOptions = getRequestOptions(this, path, requestJSON)
  console.log('------------------------------------');
  console.log('requestOptions: ', requestOptions);


  console.log('------------------------------------');
  console.log('this.opts: ', this.opts);

  // if (this.opts.ssl && this.opts.sslCa) {
  if (isTrue(this.opts.ssl, this.opts.sslCa)) {
    requestOptions.ca = this.opts.sslCa
  }
  if (isTrue(this.opts.user, this.opts.pass)) {
    requestOptions.auth = this.opts.user + ':' + this.opts.pass
  }

  console.log('------------------------------------');
  console.log('requestOptions: ', requestOptions);
  console.log('------------------------------------');
  console.log('this.opts: ', this.opts);
  // Now we'll make a request to the server
  let cbCalled = false
  const request = this.http.request(requestOptions)

  // start request timeout timer
  const reqTimeout = getTimetout(this, cbCalled, request, errback)
  request.on('error', reqOnError(cbCalled, reqTimeout, errback) )

  request.on('response', (response) => {
    clearTimeout(reqTimeout)

    var buffer = ''
    response.on('data', (chunk) => {
      buffer = buffer + chunk
    })
    
    response.on('end', function () {
      let err = {}
      let decoded = {}

      if (cbCalled) return
      cbCalled = true

      try {
        decoded = JSON.parse(buffer)
      } catch (e) {
        return returnError(response, e)
        // return
      }

      if (!Array.isArray(decoded)) {
        decoded = [decoded]
      }

      // iterate over each response, normally there will be just one
      // unless a batch rpc call response is being processed
      decoded.map(toDecodedResponse(response, callback, errback))
    })
  })
  request.end(requestJSON)
}


Client.prototype.exec = async function (method, params, callback, errback, path = '/') {
  var time = Date.now()
  path = '/'
  // console.log('args[0]: ', args[0].toString());
  // console.log('args[1].toString(): ', args[1].toString());
  const requestJSON = getRequestJSON(method, time, params)
  // const requestOptions = getRequestOptions(this, path, requestJSON)
  const requestOptions = getRequestOptions(this, path, requestJSON)


  // if (this.opts.ssl && this.opts.sslCa) {
  if (isTrue(this.opts.ssl, this.opts.sslCa)) {
    requestOptions.ca = this.opts.sslCa
  }
  if (isTrue(this.opts.user, this.opts.pass)) {
    requestOptions.auth = this.opts.user + ':' + this.opts.pass
  }

  let cbCalled = false
  const request = this.http.request(requestOptions)
  // start request timeout timer
  const reqTimeout = getTimetout(this, cbCalled, request, errback)
  request.on('error', reqOnError(cbCalled, reqTimeout, errback))

  request.on('response', (response) => {
    clearTimeout(reqTimeout)

    var buffer = ''
    response.on('data', (chunk) => {
      buffer = buffer + chunk
    })

    response.on('end', function () {
      let err = {}
      let decoded = {}

      if (cbCalled) return
      cbCalled = true

      try {
        decoded = JSON.parse(buffer)
      } catch (e) {
        return returnError(response, e)
        // return
      }

      if (!Array.isArray(decoded)) {
        decoded = [decoded]
      }

      // iterate over each response, normally there will be just one
      // unless a batch rpc call response is being processed
      decoded.map(toDecodedResponse(response, callback, errback))
    })
  })
  request.end(requestJSON)
}


module.exports.Client = (opts) => {
  
  return new Client(opts)
}