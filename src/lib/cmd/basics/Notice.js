import CommandExecutor from '../CommandExecutor'
import { TextChannel } from 'discord.js'

class Notice extends CommandExecutor {
  run(bot, msg, args) {
    msg.channel.send('공지를 전송하는 중입니다...')
      .then(m => {
        const token = msg.content.replace('\n', ' ').split(' ')
        const notice = msg.content.slice(token[0].length + token[1].length + 2, msg.content.length)
        bot.guilds.forEach(guild => {
          const channel = guild.channels.find(val => (val.name.includes('공지') || val.name.includes('notice')))
          if(channel instanceof TextChannel) {
            channel.send(notice)
          }
        })

        m.edit('공지 전송을 완료했습니다.')
      })
  }

  constructor() {
    super()

    this.cmd = 'notice'
    this.aliases = ['공지']
    this.description = '봇의 모든 서버에게 공지를 날립니다.'
    this.category = 'basic'
    this.isAdminOnly = true
  }
}

export default Notice