const Discord = require('discord.js')
const config = require('./lib/config/config')
const logger = require('korean-logger')

const bot = new Discord.Client()

bot.on('ready', () => {
  logger.success(`Login as ${bot.user.tag}`)
})

bot.on('message', msg => {
  if(msg.author.bot) return
  if(!msg.content.startsWith(`<@${bot.user.id}>`)) return

  msg.reply('ㅌㅅㅌ')
})

bot.login(config.token)