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
       
        let options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + search,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
     
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
     
     
            $ = cheerio.load(responseBody);
     
     
            let links = $(".image a.link");
     
            let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
            console.log(urls);
     
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            let iEmbed = new Discord.RichEmbed()
            .setColor(colors.orange)
            .setImage(urls[Math.floor(Math.random()* urls.length)]);
            message.channel.send({embed: iEmbed});

        });
        msg.delete();
}

module.exports.config = {
    name: "image",
    aliases: ["img", "i"]
}