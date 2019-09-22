class CommandExecutor {
  run (bot, msg, args) {
    msg.reply('⚠ This command is not overrided ⚠')
  }

  constructor () {
    this.cmd = ''
    this.description = ''
    this.aliases = []
    this.isAdminOnly = false
    this.isDMAllowed = true
    this.isDev = false
    this.category = ''
  }
}

export default CommandExecutor
