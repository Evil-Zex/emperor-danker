const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `toe`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#f0ca99')
      .setTitle('Cupid\'s Big Toe')
      .setThumbnail('https://cdn.discordapp.com/emojis/718136880163586169.png')
      .setDescription('Sells for `⏣ 60k`')
      .setFooter('Danker')
    )
  }
}