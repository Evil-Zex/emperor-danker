const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `bolt`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#362a2a')
      .setTitle('Bolt Cutters')
      .setThumbnail('https://cdn.discordapp.com/emojis/831023529255632898.png?v=1')
      .setDescription('Sells for `⏣ 450M`')
      .setFooter('Danker')
    )
  }
}