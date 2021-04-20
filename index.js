const { Client, RichEmbed } = require('discord.js');
var CronJob = require('cron').CronJob;

var job = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Santiago'
);


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

const token = 'ODMyNzE3NjM3NzkyMTcwMDA0.YHn2uw.w9cy-QSFGj3rj8f3PsDY8nFNhpE';
client.login(token);