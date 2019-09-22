import { Client } from 'discord.js'
import config from './lib/config/config.json'
import { success } from 'korean-logger'

const bot = new Client()

bot.on('ready', () => {
  success(`Login as ${bot.user.tag}`)
})

bot.on('message', msg => {
  if (msg.author.bot) return
  if (!msg.content.startsWith(`<@${bot.user.id}>`)) return

  msg.reply('ㅌㅅㅌ')
})

bot.login(config.token)
