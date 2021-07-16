const { MessageEmbed } = require('discord.js')
const figlet = require('figlet')

module.exports = {
  name: `textart`,
  aliases: ['ta'],
  description: 'Do some text art',
  run: async(client, message, args) => {
    figlet.text(args.join(" "), {
      font: "",
    }, async(err, data) => {
      message.channel.send(`\`\`\`${data}\`\`\``)
    })
  }
}