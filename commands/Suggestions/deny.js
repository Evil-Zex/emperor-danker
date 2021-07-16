
const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require('../../Models/suggest.js')
module.exports = {
  name: "dsuggest",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) {
   if (!message.member.hasPermission('MANAGE_SERVER')) return;
      const messageId = args[0]
      const acceptQuery = args.slice(1).join(" ")
      if (!acceptQuery) return message.channel.send('Please specify a reason!')
      if (!messageId) return message.channel.send('You need to specify a suggestion ID!')
      try {
        const mainGuild = client.guilds.cache.get(data.Guild)
        const suggestionChannel = mainGuild.channels.cache.get(data.Channel)
        const suggestedEmbed = await suggestionChannel.messages.fetch
          (messageId)
        const dat = suggestedEmbed.embeds[0]
        const acceptembed = new MessageEmbed()
          .setAuthor(dat.author.name, dat.author.iconURL)
          .setDescription(dat.description)
          .setColor(`RED`)
          .addField("Status: (Denied):", acceptQuery)

        suggestedEmbed.edit(acceptembed)

        const user = await client.users.cache.find((u) => u.tag === dat.author.name)
        user.send(`Your suggestion has been Denied By a moderator! Reason: ${acceptQuery}`)
      } catch (err) {
        console.log(err)
        message.channel.send('That Suggestion Might not exist!')
      }
    }
    })
}
}