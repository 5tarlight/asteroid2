const Discord = require('discord.js')
const config = require('./lib/config/config')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('login')
})

bot.on('message', msg => {
  
})

bot.login(config.token)