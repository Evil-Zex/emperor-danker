const db = require('../../Models/warns')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'remove-warn',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send(new MessageEmbed()
                  .setTitle('Removed Warn')
                  .setColor(user.displayColor)
                  .setDescription(`Removed Warn`)
                )
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
        client.modlogs({
         Member: user,
         Action: 'Remove Warn',
         User: message.member.displayName,
         Color: '#fcba03',
         Footer: `ID: ${user.id}`,
         Reason: 'No Reason Needed'
       }, message)
    }
}