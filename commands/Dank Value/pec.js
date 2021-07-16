const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pec`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Pepecoin')
      .setThumbnail('https://cdn.discordapp.com/emojis/718138332982280272.gif')
      .setDescription('Sells for `⏣ 500k`')
      .setFooter('Danker')
    )
  }
}