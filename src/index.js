import { Client } from 'discord.js'
import config from './lib/config/config.json'
import { success, info } from 'korean-logger'
import { Ping } from './lib/cmd'

const bot = new Client()

const commands = [ new Ping() ]

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
    if(command.cmd === cmd) {
      info(msg.author.id + '  ' +cmd)
      command.run(bot, msg, args)
      return
    }
  })
})

bot.login(config.token)
