const { MessageEmbed } = require('discord.js')
const Schema = require('../../Models/heistschema')
module.exports = {
  name: `helpheistdonate`,
  aliases: ['hhd'],
  description: 'Get to know how to donate for a heist!',
  run: (client, message, args) => {
    message.channel.send(new MessageEmbed()
      .setTitle('**Heist Donation Instructions**').setColor('#00ff73').setDescription(`
        **Syntax:** <amount> <req> <message>
        **Note:** In this bot you do not need to divide it with any symbol!
      `)
      .setTimestamp()
    )
  }
}