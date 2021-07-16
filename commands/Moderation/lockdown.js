const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'lockdown',
  usage: `<true | false>`,
  description: 'Locks Down the whole server!!',
  run: async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    const role = message.guild.roles.everyone;

    if(!args.length) return message.channel.send('Please Specify a query!')

    const query = args[0].toLowerCase()

    if(!['true', 'false'].includes(query)) return message.channel.send('The Option stated is not valid!')
    
    const perms = role.permissions.toArray()

    if(query === 'false') {
      perms.push('SEND_MESSAGES')
      await role.edit({ permissions: perms })
      message.channel.send('Server is Unlocked succsesfully!')
    } else if(query === 'true') {
      const newPerm = perms.filter((perms) => perms !== 'SEND_MESSAGES')
      await role.edit({ permissions: newPerm })
      message.channel.send('Server Is Locked Down Successfully!')
    }
  }
}