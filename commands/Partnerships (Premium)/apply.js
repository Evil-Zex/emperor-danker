const { MessageEmbed } = require('discord.js')
const Schema = require('../../Models/partner')
module.exports = {
  name: 'partnerapply',
  description: 'Try and partner with the guild!!',
  usage: '<servername>',
  run: async(client, message, args) => {
    const name = args.slice(1).join(" ")
        if(!name) return message.channel.send('Please specify an Guild Name!')
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
        message.channel.send(`<@&${data.RoleId}>`)
        await message.channel.send(new MessageEmbed()
          .setTitle('New Partnership Request!')
          .setThumbnail('https://cdn.discordapp.com/emojis/833660192239386664.gif?v=1')
          .setDescription(`${message.author.tag} Wants ${name} to partner with ${message.guild.name}! Please verify this server!`)
          .setColor('RED')
          .setFooter('YaY!')
        )
      } else {
        await message.channel.send(new MessageEmbed()
          .setTitle('New Partnership Request!')
          .setThumbnail('https://cdn.discordapp.com/emojis/833660192239386664.gif?v=1')
          .setDescription(`${message.author.tag} Wants ${message.guild.name} to partner with ${name}! Please verify this server!`)
          .setColor('RED')
          .setFooter('YaY!')
        )
      }
    })
  }
}