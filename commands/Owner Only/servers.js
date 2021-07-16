
module.exports = {
  name: 'servers',
  description: 'Owner Only!',
  run: async(client, message, args) => {
   if(message.author.id !== '776047268155359253') return message.channel.send('This is a owner only command!')
   client.guilds.cache.forEach((guild) => {
          message.channel.send(
            `${guild.name} has ${guild.memberCount}`
          )
        })
  }
}