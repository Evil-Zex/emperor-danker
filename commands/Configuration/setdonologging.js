const Schema = require('../../Models/log')

module.exports = {
  name: "setdono",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
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
      message.channel.send(`${channel} has been set as Donation logging channel!`)
    })
  }
}