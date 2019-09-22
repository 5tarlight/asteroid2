class CommandExecutor {
  run(bot, msg, args) {
    msg.reply('⚠ This command is not overrided ⚠')    
  }

  name = ''
  description = ''
  aliases = []
  isAdminOnly = false
  isDMAllowed = true
  isDev = false
}

module.exports = CommandExecutor