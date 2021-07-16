const Schema = require('../../Models/premium')
module.exports = {
  name: 'premium',
  description: 'Owner Only!',
  run: async(client, message, args) => {
   if(message.author.id !== '776047268155359253') return message.channel.send('This is a owner only command!')
   const GuildID = args[0]
   if(!GuildID) return message.channel.send('Please specify a Guild ID!')
   Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
     if(data) {
      data.Guild = GuildID;
      data.save()
     } else {
       new Schema({
           Guild: GuildID
         }).save()
     }
     message.channel.send(`Given the guild ${GuildID} Premium!!`)
   })
  }
}