const mineflayer = require('mineflayer')
const config = require('./config')
const movement = require('./movement')
const chat = require('./chat')
const reconnect = require('./reconnect')

function startBot() {
  const bot = mineflayer.createBot({
    host: config.host,
    port: config.port,
    username: config.username
  })

  bot.on('spawn', () => {
    console.log("✅ Bot joined the server")
    movement.start(bot)
    chat.startChat(bot)
  })

  bot.on('end', () => {
    console.log("❌ Disconnected")
    reconnect(startBot)
  })

  bot.on('error', err => console.log("Error:", err))
}

module.exports = startBot
