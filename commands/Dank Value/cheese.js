const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `cheese`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Shredded Cheese')
      .setThumbnail('https://cdn.discordapp.com/emojis/830509316933943307.png')
      .setDescription('Sells for `⏣ 8k`')
      .setFooter('Danker')
    )
  }
}