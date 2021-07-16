const Schema = require('../../Models/moderation-log')

module.exports = {
  name: "setmodlog",
  description: 'Set The mod logs channel!',
  usage: '<#channel>',
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first()
    if(!message.member.hasPermission('MANAGE_GUILD')) return;
    if(!channel) return message.channel.send('You need to specify a channel!')
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
        data.Channel = channel.id;
        data.save()
      } else {
         new Schema({
           Guild: message.guild.id,
           Channel: channel.id
         }).save()
      }
      message.channel.send(`${channel} has been set as Moderation  Logs channel!`)
    })
  }
}