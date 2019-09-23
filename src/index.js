import { Client } from 'discord.js'
import config from './lib/config/config.json'
import { success, info } from 'korean-logger'
import { Ping, Help } from './lib/cmd'
import { RichEmbed } from 'discord.js'

const bot = new Client()

const admins = ['352755226224361482']

const commands = [
  new Ping(),
  new Help()
]

export function getCommands() { return commands }

bot.on('ready', () => {
  success(`Login as ${bot.user.tag}`)
})

bot.on('message', msg => {
  let prefix = ''
  
  if (msg.author.bot) return
  if (msg.content.startsWith(`<@!${bot.user.id}>`)) {
    prefix = `<@!${bot.user.id}>`
  } else if (msg.content.startsWith(`<@${bot.user.id}>`)) {
    prefix = `<@${bot.user.id}>`
  } else {
    return
  }

  const content = msg.content.slice(prefix.length).trim().toLowerCase()
  const cmd = content.split(' ')[0]
  const args = content.split(' ').slice(1)

  commands.forEach(command => {
    if(command.cmd === cmd || command.aliases.includes(cmd)) {
      if(!command.isDMAllowed && msg.channel.type === 'dm') {
        const embed = new RichEmbed()
          .setTitle('실패')
          .setDescription('❌해당 명령어를 DM에서 사용하실 수 없습니다.')
          .setColor('#ff5555')
        
          msg.channel.send(embed)
          info(`${msg.author.id} ${cmd}(dm)`)
          return
      }

      if(command.isAdminOnly) {
        if(!admins.includes(msg.author.id)) {
          const embed = new RichEmbed()
            .setTitle('실패')
            .setDescription('❌해당 명령어를 사용 할 수 있는 권한이 없습니다.')
            .setColor('#ff5555')

          msg.channel.send(embed)
          info(`${msg.author.id} ${cmd}(forbidden)`)
          return
        }
      }

      info(msg.author.id + ' ' + cmd)
      command.run(bot, msg, args)
      return
    }
  })
})

bot.login(config.token)
