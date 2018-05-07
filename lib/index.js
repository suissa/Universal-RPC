const commands = require('./commands')
const rpc = require('./jsonrpc.suissa')
const util = require('util')  

const handleError = (err) => console.error(err)
const error = (fn) => (err) => fn(err)

const toArg = (prev, cur, i) => [...prev, cur]
const getFn = (cb, params) => (cb === undefined) ? params : cb

const getArgs = (_params) => [
  null,
  ..._params.reduce(toArg, [])
]

const getAction = (commands) => ({ actions, i, method, rpc }) => ({
  [actions[i]]: util.promisify((params, cb) => callRpc(commands)({ method, params, cb, rpc }))
})

const toClientActions = ({ actions, rpc }, commands) => (result, method, i) =>
  Object.assign(
    result,
    getAction(commands)({ actions, i, method, rpc })
  )
const toActions = (opts, commands) => 
  toClientActions({
    actions: Object.keys(commands),
    rpc: rpc.Client(opts)
  }, 
  commands)

const success = ({cb, params, self}) => (..._params) => 
  getFn(cb, params).apply(
    self, 
    getArgs(_params)
  )

const getDefaultArgs = (params, commands, method) => 
  (typeof params === 'function')
    ? (commands[method + 'Args'])
      ? commands[method + 'Args']
      : []
    : [params]

const callRpc = (commands) => ({ method, params, cb, rpc }) =>
  rpc.call({ 
    method, 
    params: getDefaultArgs(params, commands, method), 
    callback: success({ cb, params, self: this }), 
    errback: error(handleError)
  })

module.exports = (opts) => //_promisify(commands, opts)
  // console.log(
    Object.values(commands)
      .reduce(toActions(opts, commands), {})
  // )