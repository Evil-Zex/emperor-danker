const { Client, Message, MessageEmbed } = require('discord.js')
const axios = require('axios')
const Schema = require('../../Models/premium')
module.exports = {
  name: "binary",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
    if (data) {
           if(!args[0]) return message.channel.send('Please specify if u want to encode or decode!')

           const query = args.shift().toLowerCase();
           let word = args.join(" ")

           if(query === 'encode') {
                 if(!word) return message.channel.send('Please specify a word to encode!')
                 const { data } = await axios.get(`https://some-random-api.ml/binary?text=${encodeURIComponent(word)}`)
                 message.channel.send(data.binary, ({ code: "fix"}) )
           } else if(query === 'decode') {
              if(!word) return message.channel.send('Please specify a word to decode!')
              const { data } = await axios.get(`https://some-random-api.ml/binary?decode=${encodeURIComponent(word)}`)
                message.channel.send(data.text, ({
                   code: "fix"
                 }))
           } else return message.channel.send('That is not a valid option!')
    }
    if(!data) return message.channel.send('This is a Premium Server command!')
  })
    
  }
}