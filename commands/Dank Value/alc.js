const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `alc`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Alcohol')
      .setThumbnail('https://cdn.discordapp.com/emojis/709406795097047090.png')
      .setDescription('Sells for `⏣ 4-6k`')
      .setFooter('Danker')
    )
  }
}