const { Client, Message, MessageEmbed } = require('discord.js');
const { create } = require('sourcebin')
module.exports = {
    name: 'source',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      const code = args.join(" ")
      if(!code) return message.channel.send('You Need To Give Some Code to Upload!')
      create([
        {
          name: `${message.member.displayName}`,
          content: code,
          language: 'javascript'
        }
      ], {
        title: `${message.member.displayName}\'s Code`,
        description: `Javascript Code By ${message.member.displayName}`
      }).then((value) => {
        message.channel.send(`Your Javascript Code Has Been Uploaded: ${value.url}`)
      })
    }
}