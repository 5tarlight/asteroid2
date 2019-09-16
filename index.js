const Discord = require('discord.js')
const config = require('./lib/config/config')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('login')
})

bot.login(config.token)