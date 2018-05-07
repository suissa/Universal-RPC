const commands = require('./commands.ltc')
const rpc = require('./index')

module.exports.Client = (opts) => rpc(commands)(opts)