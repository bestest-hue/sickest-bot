const Discord = require("discord.js");
const superagent = require("superagent");
// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Searching...")

        let {body} = await superagent
        .get('https://dog.ceo/api/breeds/image/random')
        console.log(body.message)
        if(!{body}) return message.channel.send("Image not found. Please try again.")

        let dEmbed = new Discord.RichEmbed()
        .setColor(colors.orange)
        .setTitle('Open original')
        .setURL(body.message)
        .setImage(body.message)
        .setTimestamp()
        .setFooter('Sick Bot', bot.user.displayAvatarURL)
        message.channel.send({embed: dEmbed});

        msg.delete();
}

module.exports.config = {
    name: "dog",
    aliases: ["d"]
}
