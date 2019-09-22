import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'
import { getCommands } from '../../../index'

class Help extends CommandExecutor {
  run (bot, msg, args) {
    const commands = getCommands()

    let embed = new RichEmbed()
      .setTitle('도움말')

    let i = 0

    commands.forEach((command) => {
      if(i > 20) {
        i = 0
        msg.channel.send(embed)

        embed = new RichEmbed()
          .setTitle('도움말 (연결)')
        }
        
        embed.addField(command.cmd, command.description, true)
        i++
    })

    msg.channel.send(embed)
  }

  constructor () {
    super()

    this.cmd = 'help'
    this.aliases = ['헬프', '도움', '도움말']
    this.description = '도움말을 보여줍니다.'
    this.category = 'basic'
  }
}

export default Help
