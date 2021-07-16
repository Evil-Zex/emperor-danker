const { Collection, Client, Discord, MessageEmbed } = require('discord.js')
const ms = require('ms')
const exit = require('./Models/moderation-log')
const AutoPoster = require('topgg-autoposter')
const db = require('quick.db')
const mod = require('./Models/moderation-log.js')
const keepAlive = require('./server')
const fs = require('fs')
const schema = require('./Models/cc')
const mongoose = require('mongoose')
const client = new Client({
  disableEveryone: true
})
require('dotenv').config({
    path: './config.env'
})
mongoose.connect('mongodb+srv://Hi:hi@cluster0.6tnj5.mongodb.net/Data', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
const prefix = process.env.PREFIX
const token = process.env.TOKEN
client.commands = new Collection();
client.aliases = new Collection();
client.modlogs = async function({ Member, Action, Color, User, Footer, Reason }, message) {
  mod.findOne({ Guild: message.guild.id }, async(err, data) => {
    if(data) {
      const channel = message.guild.channels.cache.get(data.Channel)
const logsEmbed = new MessageEmbed().setColor(Color)
  .addField('User', `${Member.user.tag} (${Member.id})`, true)
  .addField('Moderator', `<@${message.author.id}>`, true)
  .addField('Reason', `${Reason || 'No Reason Provided'}`, false)
  .setTitle(`${Action} | ${Member.user.tag}`)
  .setFooter(Footer)
  .setTimestamp()
  channel.send(logsEmbed)
    } else return;
  }) 
}
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on('ready', async (message) => {
  client.user.setPresence({
    activity: { name: `
    *help | dankerbot.cf` }
  });
  console.log(`${client.user.username} ✅`)
})


const ap = AutoPoster(process.env.TOOKEN, client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;

    const data = await schema.findOne({ Guild: message.guild.id, Command: cmd });
    if (data) message.channel.send(data.Response)
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
      command.run(client, message, args)
    }
})


keepAlive()

client.login(process.env.TOKEN)