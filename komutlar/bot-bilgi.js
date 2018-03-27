        const Discord = require('discord.js');
exports.run = function(client, message, args) {
        
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }
