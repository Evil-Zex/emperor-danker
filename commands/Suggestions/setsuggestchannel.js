const { Client, Message, MessageEmbed } = require('discord.js')
const Schema = require('../../Models/suggest')
module.exports = {
  name: "setsuggestchannel",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    const channel = message.mentions.channels.first()
         if(!channel) return message.channel.send('Please specify a channel!')
         Schema.findOne({ Guild: message.guild.id}, async(err, data) => {
            if(data) {
                data.Channel = channel.id;
        data.save()
            } else {
               new Schema({
           Guild: message.guild.id,
           Channel: channel.id
         }).save()
            }
            message.channel.send(`${channel} has been set as the suggestion channel!`)
         })
  }
}
