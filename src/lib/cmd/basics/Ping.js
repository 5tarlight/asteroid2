import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'

class Ping extends CommandExecutor {
  run (bot, msg, args) {
    const ping = Math.round(bot.ping)
    let color = ''
    let des = ''

    if (ping <= 100) {
      color = '#5eff5e'
      des = '✅ 핑이 낮습니다.'
    } else if (ping > 100 && ping <= 200) {
      color = '#ffa300'
      des = '⚠ 핑이 보통 수준입니다.'
    } else {
      color = '#ff5555'
      des = '📛 핑이 높습니다.'
    }

    const embed = new RichEmbed()
      .setTitle(`**${ping}** ms`)
      .setDescription(des)
      .setColor(color)

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

export default Ping
