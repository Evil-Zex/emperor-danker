const { tictactoe } = require('reconlx')
const Schema = require('../../Models/premium')
module.exports = {
    name : 'tictactoe',
    aliases: ['ttt'],
    description: 'Play tictactoe',
    run : async(client, message, args) => {
      Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data) {
 const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
        } else {
          message.channel.send('This is a Premium Server command!')
        }
      })
    }
}