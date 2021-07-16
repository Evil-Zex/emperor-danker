  const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require('../../Models/suggest.js')
module.exports = {
  name: "suggest",
  description: `Suggestion system!`,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
         const mainGuild = client.guilds.cache.get(data.Guild)
    const suggestionQuery = args.join(" ")
    if(!suggestionQuery) return message.channel.send('You need to specify a suggestion!')
    const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    .setTitle('New Suggestion')
    .setDescription(`**Suggestion**: ${suggestionQuery}`)
    .setColor('YELLOW')
    .setTimestamp()
    .addField("Status:", 'Pending')
    message.channel.send('Submitted Suggestion!')
    mainGuild.channels.cache.get(data.Channel).send(embed)
      }
    }) 
  },
};