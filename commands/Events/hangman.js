const { hangman } = require('reconlx')
const Schema = require('../../Models/premium')
module.exports = {
    name : 'hangman',
    description: 'Play hangman!',
    run : async(client, message, args) => {
      Schema.findOne({ Guild: message.guild.id }, async(err,data) => {
        if(data) {
  if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send('You need send messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })
        message.delete()
        hang.start();
        } else {
          message.channel.send('This is a Premium Server command!')
        }
      })

    }
}