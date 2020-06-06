const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', function() {

    bot.user.setActivity('ghhghyserety')

})

bot.on('message', function(message){
    if (message.content === '!rien'){
        message.channel.send('rien')
    }


})


bot.login(process.env.TOKEN)
