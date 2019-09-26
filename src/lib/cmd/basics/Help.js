import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'
import { getCommands } from '../../../index'

class Help extends CommandExecutor {
  run (bot, msg, args) {
    const commands = getCommands()
    
    if (args.length < 1) {
      const categories = []

      commands.forEach(command => {
        if(!categories.includes(command.category)) {
          categories.push(command.category)
        }
      })

      const embed = new RichEmbed()
        .setTitle('카테고리')
        .setDescription('<@622743602292064277> 도움 <카테고리>')
      
      categories.forEach(c => {
        embed.addField('**' + c + '**', '\u200B', true)
      })

      msg.channel.send(embed)
      return
    }

    const category = args[0]
    const helpCmds = []

    commands.forEach(c => {
      if(c.category === category) {
        helpCmds.push(c)
      }
    })

    let embed = new RichEmbed()
      .setTitle('도움말')

    let i = 0

    helpCmds.forEach(hc => {
      if (i > 20) {
        i = 0
        msg.channel.send(embed)

        embed = new RichEmbed()
          .setTitle('도움말 (연결)')
      }

      embed.addField(`**${hc.cmd}**`, hc.description, true)
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
