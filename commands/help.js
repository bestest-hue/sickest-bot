const Discord = require("discord.js");
const superagent = require("superagent");

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let hEmbed = new Discord.RichEmbed()
    .setTitle("Command List")
    .setColor(colors.blue)
    .addField("**!serverinfo**", "- Displays information about the current server.")
    .addField("**!cat**", "- Posts a random image of a cat.")
    .addField("**!dog**", "- Posts a random image of a dog.")
    .addField("**!meme**", "- Posts a random meme.")
    .addField("**!image [query]**", "- Finds a random image based on query.")
    .addField("**!poll [question]**", "- Starts a poll.")
    .addField("**!urban random**", "- Posts a random Urban Dictionary definition.")
    .addField("**!urban search [query]**", "- Posts the most updated definition of query.");

    message.channel.send({embed: hEmbed});
}

module.exports.config = {
    name: "help",
    aliases: ["h"]
}