const CommandExecutor = require('../CommandExecutor')
const Discord = require('discord.js')

class Ping extends CommandExecutor {
  run(bot, msg, args) {
    const embed = new Discord.RichEmbed()
      .setTitle('퐁!')
      .setDescription(bot.ping)

    msg.channel.send(embed)
  }

  name = 'ping'
  aliases = ['핑', '퐁', 'pong', 'delay', '딜레이']
  description = '봇의 핑을 보여줍니다.'
}

export default Ping