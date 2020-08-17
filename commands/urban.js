const Discord = require("discord.js");
const superagent = require("superagent");
const urban = require("urban");

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    if(args < 1 || !["random", "search"].includes(args[0])) return message.channel.send("`!urban search <query>`")
    let image = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg";
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
        try {
            search.first(res => {
                if(!res) return message.channel.send("No results found for this topic. Please try again");
                let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res;

                let embed = new Discord.RichEmbed()
                .setColor(colors.orange)
                .setAuthor("Urban Dictionary", image)
                .setTitle(`${word}`)
                .setDescription(`**Definition:** ${definition || "No definition"}
                **Example:** ${example || "No example"}
                **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/" })`)
                .setTimestamp()
                .setFooter(`Written by ${author || "Unknown"}`);

                message.channel.send(embed);
            })
        } catch(e) {
            console.log(e);
        }
}

module.exports.config = {
    name: "urban",
    aliases: ["urb"]
}
