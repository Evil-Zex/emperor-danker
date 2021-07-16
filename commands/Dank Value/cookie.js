const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `cookie`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Cookie')
      .setThumbnail('https://cdn.discordapp.com/emojis/573152241289003036.png')
      .setDescription('Sells for `⏣ 2k`')
      .setFooter('Danker')
    )
  }
}