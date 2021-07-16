const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `candy`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#bf4998')
      .setTitle('Candy')
      .setThumbnail('https://cdn.discordapp.com/emojis/792397132828114965.png')
      .setDescription('Sells for `⏣ 20k`')
      .setFooter('Danker')
    )
  }
}