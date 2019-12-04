const Discord = require("discord.js");
const superagent = require("superagent");

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Searching...")

        let {body} = await superagent
        .get("https://opentdb.com/api.php?amount=1&category=9&type=multiple")
        console.log(body.message)
        if(!{body}) return message.channel.send("Question not found. Please try again.")

        let tEmbed = new Discord.RichEmbed()
        .setColor(colors.orange)
        .setTitle(body.results[0].question)
        .setDescription(`**Answer: ||${body.results[0].correct_answer}||**`)
        .setTimestamp()
        .setFooter('Sick Bot', bot.user.displayAvatarURL)
        message.channel.send({embed: tEmbed});

        msg.delete();
}

module.exports.config = {
    name: "trivia",
    aliases: ["t"]
}
