import { RichEmbed } from 'discord.js'

class Embed extends RichEmbed {
  constructor () {
    super()
    super.setFooter('Starlight#7528 2019 © All rights reserved')
    super.setTimestamp(new Date())
  }
}

export default Embed
