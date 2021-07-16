const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pet`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Pepetrophy')
      .setThumbnail('https://cdn.discordapp.com/emojis/718136428219072662.gif')
      .setDescription('Sells for `⏣ 47M`')
      .setFooter('Danker')
    )
  }
}