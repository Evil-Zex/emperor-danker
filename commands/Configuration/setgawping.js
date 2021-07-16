const Schema = require('../../Models/gawping')
const { MessageEmbed } = require('discord.js')


module.exports = {
  name: `setgiveawayping`,
  aliases: ['sgp'],
  usage: '<roleid>',
  description: 'Sets The Tag Role For Giveaways!',
  run: (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return;
    const role = args[0]
    if (!role) return message.channel.send('Please specify a role Id!')
    Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
      if (data) {
        data.RoleId = role;
        data.save()
      } else {
        new Schema({
          Guild: message.guild.id,
          RoleId: role
        }).save()
      }
      message.channel.send(`${role} Has been set as the Giveaway Ping role!`)
    })
  }
}