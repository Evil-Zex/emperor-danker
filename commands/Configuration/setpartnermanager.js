const Schema = require('../../Models/partner')
const { MessageEmbed } = require('discord.js')


module.exports = {
  name: `setpartnermanager`,
  aliases: ['spm'],
  usage: '<roleid>',
  description: 'Set The Roles the bot should ping when a new donation comes in!',
  run: (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return;
      const role = args[0]
         if(!role) return message.channel.send('Please specify a role Id!')
         Schema.findOne({ Guild: message.guild.id}, async(err, data) => {
            if(data) {
                data.RoleId = role;
                data.save()
            } else {
               new Schema({
           Guild: message.guild.id,
           RoleId: role
         }).save()
            }
            message.channel.send(`${role} Has been set as the partnership manager role!`)
         })
  }
}