function startChat(bot){
  const messages = [
    "Welcome to Infinite SMP",
    "I am Sinzo the gop gop master"
    "Araf is Gay"
]

  setInterval(() => {
    const msg = messages[Math.floor(Math.random() * messages.length)]
    bot.chat(msg)
  }, 20000) // every 20 seconds
}

module.exports = { startChat: startChat }
