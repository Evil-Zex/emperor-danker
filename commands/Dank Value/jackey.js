const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `jackey`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('ORANGE')
      .setTitle('Jackey\'O Lantern')
      .setThumbnail('https://cdn.discordapp.com/emojis/758662115841802271.png')
      .setDescription('Sells for `⏣ 10M`')
      .setFooter('Danker')
    )
  }
}