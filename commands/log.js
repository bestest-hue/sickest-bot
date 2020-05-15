const Discord = require("discord.js");
const superagent = require("superagent");
const cheerio = require('cheerio');
const request = require('request');

// FILES
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
        let parts = message.content.split(" ");
        let search = parts.slice(1).join(" ");
        let msg = await message.channel.send("Searching...")
        let hisurl = 'https://www.twitch.tv/popout/sick_nerd/viewercard/'
       
      

           
            // Send result
            let hisEmbed = new Discord.RichEmbed()
            .setTitle('View Logs')
            .setURL(hisurl + search)
            .setColor(colors.orange)
            .setTimestamp()
            .setFooter('Sick Bot', bot.user.displayAvatarURL);
            message.channel.send({embed: hisEmbed});

            msg.delete();

        };
        


module.exports.config = {
    name: "log",
    aliases: ["lo", "l"]
}
