const {Message, MessageEmbed}= require('discord.js')

module.exports = {
    name : 'userinfo',
    aliases: ['ui'],
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
       const target = message.mentions.members.first() 
       if(!target) return message.channel.send('Please Specify A User!')
       const memberRoles = target.roles.cache
     .filter((roles) => roles.id !== message.guild.id)
     .map((role) => role.toString())
       message.channel.send(new MessageEmbed()
        .addField('Username', `${target.user.username}`, true)
        .setColor(target.displayColor)
        .addField('Discriminator', `${target.user.discriminator}`, true)
        .addField('UserID', `${target.user.id}`, true)
        .addField('Creation Date', `${target.user.createdTimestamp}`, false)
        .addField('Joined Server', `${target.joinedAt}`, true)
        .addField('Highest Role', `${target.roles.highest}`, true)
        .addField('Nickname', `${target.nickname || 'No Nickname'}`, true)
        .addField('Member-Color', `${target.displayHexColor}`, true)
        .addField('Last Message', `${target.lastMessage || 'No Recent Message'}`, true)
        .addField('Last Message ChannelID', `${target.lastMessageChannelID || 'No Recent Message'}`, true)
        .addField('Last Message ID', `${target.lastMessageID || 'No Recent Message'}`, true)
        .addField('Bot', `${target.user.bot}`, true)
        .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
       )
    }
}