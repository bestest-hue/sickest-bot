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

        let tqEmbed = new Discord.RichEmbed()
        .setColor(colors.orange)
        .setTitle(body.results[0].question)
        .setTimestamp()
        .setFooter('Sick Bot', bot.user.displayAvatarURL)
        message.channel.send({embed: tqEmbed}).then(r => r.delete('21000'));

        msg.delete();

        setTimeout(function() {
            console.log('Answer sent!');
            let taEmbed = new Discord.RichEmbed()
            .setColor(colors.orange)
            .setTitle(body.results[0].correct_answer)
            .setTimestamp()
            .setFooter('Sick Bot', bot.user.displayAvatarURL)
            message.channel.send({embed: taEmbed}).then(r => r.delete('10000'));
        }, 20000);

}

module.exports.config = {
    name: "trivia",
    aliases: ["t"]
}
