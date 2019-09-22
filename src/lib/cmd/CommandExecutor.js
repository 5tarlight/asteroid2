class CommandExecutor {
  run (bot, msg, args) {
    msg.reply('⚠ This command is not overrided ⚠')
  }

  constructor () {
    this.name = ''
    this.description = ''
    this.aliases = []
    this.isAdminOnly = false
    this.isDMAllowed = true
    this.isDev = false
  }
}

export default CommandExecutor
