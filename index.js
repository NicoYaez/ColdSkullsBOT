const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)

    client.user.setPresence( {
        status: "online",
        game: {
            name: "!help | comandos ",
            type: "PLAYING"
        }
    } );

});

client.on('message', msg => {

    job.start()

})

const token = 'token aqui';
client.login(token);
