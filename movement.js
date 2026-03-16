function start(bot) {
  const actions = ['forward','back','left','right']

  setInterval(() => {
    const action = actions[Math.floor(Math.random()*actions.length)]
    bot.setControlState(action,true)
    bot.setControlState('jump',true)

    // Random look around
    bot.look(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      true
    )

    setTimeout(() => {
      bot.setControlState(action,false)
      bot.setControlState('jump',false)
    }, 2000)

  }, 8000)
}

module.exports = { start }
