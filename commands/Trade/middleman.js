const Schema = require('../../Models/middleman')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'middleman',
  aliases: ['mm'],
  description: 'Request a Middleman In the guild to trade!',
  usage: '<userIDofsecondperson> <thetrade>',
  run: async(client, message, args) => {
    const userID = args[0]
    const trade = args.slice(1).join(" ")
    if(!userID) return message.channel.send('Please specify another userID of who you are trading with!')
    if(!trade) return message.channel.send('Please specify a trade explination!')
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
        message.channel.send(`<@&${data.RoleId}>`)
        await message.channel.send(new MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/emojis/813981670754615306.gif?v=1')
        .setTitle('New Middleman Request!')
        .setDescription(`
          Traders: <@${message.author.id}> and <@${userID}>
          Trade Explination: ${trade}
        `)
        .setColor('#1dfa19')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        )
      } else {
        await message.channel.send(new MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/emojis/813981670754615306.gif?v=1')
        .setTitle('New Middleman Request!')
        .setDescription(`
          Traders: <@${message.author.id}> and <@${userID}>
          Trade Explination: ${trade}
        `)
        .setColor('#1dfa19')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        )
      }
    })
  }
}