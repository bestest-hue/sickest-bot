const Discord = require("discord.js");
const superagent = require("superagent");

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let question = args.slice(0).join(" ");
  
  if (args.length === 0) 
    return message.reply('**Please enter a question to poll!**')

message.delete()
  const pollEmbed = new Discord.RichEmbed()
      .setTitle(`${question}`)
      .setColor(colors.blue)
      .setFooter(`started by: ${message.author.username}`, `${message.author.avatarURL}`)

message.channel.send(pollEmbed)
  .then(message => {
    message.react('👍')
    message.react('👎')
  })
  .catch(() => console.error('Failed to react.'));
    
}

module.exports.config = {
    name: "poll",
    aliases: []
}