module.exports = {
  name: 'apply-premium',
  description: 'Apply for Danker Premium!',
  run: async(client, message, args) => {
    message.channel.send('Your Request has been sent!')
    const channelID = '836458698934583308'
    const owner = client.channels.cache.get(channelID)
      let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  },
  `Requested with command by ${message.author.tag}`
)
.catch(console.log);
  owner.send(`Here Is The Invite!! ${invite} . ${message.guild.name} applied`)
  }
}