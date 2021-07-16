const Schema = require('../../Models/heistping')
const { MessageEmbed } = require('discord.js')


module.exports = {
  name: `heist`,
  aliases: ['h'],
  usage: '<sponsorid> <message>',
  description: 'Tags The Heist Ping role set for the server!',
  run: async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      const userID = args[0]
      const messagee = args.slice(1).join(" ")
      if(data) {
        message.delete()
        message.channel.send(`<@&${data.RoleId}>`)
        await message.channel.send(new MessageEmbed()
          .setTitle('Heist!')
          .setThumbnail('https://cdn.discordapp.com/emojis/785732564013809695.gif?v=1')
          .setDescription(`
            **Sponsor:** <@${userID}>
            **Message:** ${messagee}
          `)
          .addField('Checklist:', `
            Keep **2000 Coins** In wallet
            Keep **Life Saver** In Inventory
            Disable **Passive Mode**!
          `)
          .setFooter('Don\' Forget to Thank The Sponsor!')
          .setTimestamp()
          .setColor('#00ff80')
        )
      }
      if(!data) {
        await message.channel.send(new MessageEmbed()
          .setTitle('Heist!')
          .setThumbnail('https://cdn.discordapp.com/emojis/785732564013809695.gif?v=1')
          .setDescription(`
            **Sponsor:** <@${userID}>
            **Message:** ${messagee}
          `)
          .setFooter('Don\' Forget to Thank The Sponsor!')
          .setTimestamp()
          .setColor('#00ff80')
          .addField('Checklist:', `
            Keep **2000 Coins** In wallet
            Keep **Life Saver** In Inventory
            Disable **Passive Mode**!
          `)
        )
      }
    })
  }
}