import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'

class Help extends CommandExecutor {
  run (bot, msg, args) {
    const embed = new RichEmbed()
      .setTitle('퐁!')
      .setDescription(bot.ping)

    msg.channel.send(embed)
  }

  constructor () {
    super()

    this.cmd = 'ping'
    this.aliases = ['핑', '퐁', 'pong', 'delay', '딜레이']
    this.description = '봇의 핑을 보여줍니다.'
    this.category = 'basic'
  }
}

export default Help
