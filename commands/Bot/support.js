const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: "support",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    const owner = client.users.cache.get('776047268155359253')
    const query = args.join(" ")
    if(!query) return message.channel.send('You need to specify a query!')
    message.channel.send('Support Slip Submitted!')
    const reportembed = new MessageEmbed()
    .setTitle('New Support Slip!')
    .setDescription('Looks Like Someone is having trouble!')
    .setColor('RED')
    .addField('User:', message.author.toString(), true)
    .addField('Guild:', message.guild.name, true)
    .addField('Query:', query)
    owner.send(reportembed) 
  }
}