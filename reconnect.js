const config = require('./config')

function reconnect(startBot){
  console.log(`🔄 Reconnecting in ${config.reconnectDelay/1000} seconds...`)
  setTimeout(() => {
    startBot()
  }, config.reconnectDelay)
}

module.exports = reconnect
