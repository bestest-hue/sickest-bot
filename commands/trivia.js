const Discord = require("discord.js");
const superagent = require("superagent");

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Searching...")

        let {body} = await superagent
        .get("https://elderly-property.glitch.me/api/questions/random")
        console.log(body.message)
        if(!{body}) return message.channel.send("Question not found. Please try again.")

        let tqEmbed = new Discord.RichEmbed()
        .setColor(colors.orange)
        .setTitle(body.question)
        .setTimestamp()
        .setFooter('Sick Bot', bot.user.displayAvatarURL)
        message.channel.send({embed: tqEmbed}).then(r => r.delete('21000'));

        msg.delete();
        message.delete();

        setTimeout(function() {
            console.log('Answer sent!');
            let taEmbed = new Discord.RichEmbed()
            .setColor(colors.orange)
            .setTitle(body.answer)
            .setTimestamp()
            .setFooter('Sick Bot', bot.user.displayAvatarURL)
            message.channel.send({embed: taEmbed});
        }, 20000);

}

module.exports.config = {
    name: "trivia",
    aliases: ["t"]
}
