const db = require('../../Models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warn',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`You have been warned in ${message.guild.name}. Reason: **${reason}**`)
            .setColor("RED")
        )
        message.channel.send(new MessageEmbed()
            .setTitle('Warned')
            .setDescription(`Warned ${user} for **${reason}**`).setColor(user.displayColor)
        )
        client.modlogs({
         Member: user,
         Action: 'Warn',
         User: message.member.displayName,
         Color: 'YELLOW',
         Footer: `ID: ${user.id}`,
         Reason: reason
       }, message)
    }
}