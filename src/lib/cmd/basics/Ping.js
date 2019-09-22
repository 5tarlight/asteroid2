import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'

class Ping extends CommandExecutor {
  run(bot, msg, args) {
    const embed = new RichEmbed()
      .setTitle('퐁!')
      .setDescription(bot.ping)

    msg.channel.send(embed)
  }

  constructor() {
    super()

    super.name = 'ping'
    super.aliases = ['핑', '퐁', 'pong', 'delay', '딜레이']
    super.description = '봇의 핑을 보여줍니다.'
  }

}

export default Ping