const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require('axios')
const Schema = require('../../Models/premium')
module.exports = {
  name: "djs",
  aliases: ['docs'],
  description: 'Search The Discordjs docs for answers!',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
        const query = args.join(" ")
    if(!query) return message.channel.send('You need to Specify a Query!')
    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`

    axios.get(url).then(({ data }) => {
      if(data) {
        message.channel.send({ embed : data})
      }
    })
      } else {
       message.channel.send('This is a Premium Server command!')
      }
    })
  },
};