const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `chill`,
  description: 'Dank Value command',
  run: (message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#0acaff')
      .setTitle('Chill Pill')
      .setThumbnail('https://cdn.discordapp.com/emojis/716825781908537395.png')
      .setDescription('Sells for `⏣ 50k`')
      .setFooter('Danker')
    )
  }
}