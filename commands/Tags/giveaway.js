const Schema = require('../../Models/gawping')
const { MessageEmbed } = require('discord.js')


module.exports = {
  name: `giveaway`,
  aliases: ['gaw'],
  usage: '<sponsorid> <message>',
  description: 'Tags The Giveaway Ping role set for the server!',
  run: async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      const userID = args[0]
      const messagee = args.slice(1).join(" ")
      if(!userID) return;
      if(!messagee) return;
      if(data) {
        message.delete()
        message.channel.send(`<@&${data.RoleId}>`)
        await message.channel.send(new MessageEmbed()
          .setTitle('Giveaway!')
          .setThumbnail('https://c.tenor.com/qg8K8VOmzJwAAAAj/party-popper-confetti.gif')
          .setDescription(`
            **Sponsor:** <@${userID}>
            **Message:** ${messagee}
          `)
          .setFooter('Don\' Forget to Thank The Sponsor!')
          .setTimestamp()
          .setColor('#ff1500')
        )
      }
      if(!data) {
        await message.channel.send(new MessageEmbed()
          .setTitle('Giveaway!')
          .setThumbnail('https://c.tenor.com/qg8K8VOmzJwAAAAj/party-popper-confetti.gif')
          .setDescription(`
            **Sponsor:** <@${userID}>
            **Message:** ${messagee}
          `)
          .setFooter('Don\' Forget to Thank The Sponsor!')
          .setTimestamp()
          .setColor('#ff1500')
        )
      }
    })
  }
}