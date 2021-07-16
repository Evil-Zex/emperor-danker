const Schema = require('../../Models/premium')
module.exports = {
  name: 'sv',
  description: 'Owner Only!',
  run: async(client, message, args) => {
   if(message.author.id !== '776047268155359253') return message.channel.send('This is a owner only command!')
   const guildID = args[0]
   const guild = client.guilds.cache.filter(g => g.id === guildID).first()
   message.channel.send(guild.name)
  }
}