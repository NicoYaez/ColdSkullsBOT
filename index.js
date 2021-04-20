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

    //client.user.setStatus('online'); // online, idle, invisible, dnd

});


client.on('message', msg => {

    if (msg.content.includes('!help')) {
        const embed = new RichEmbed()
            .setTitle('Comandos ColdSkulls Ayuda!')
            .setColor('#FFF300')
            .setDescription(
                "!codigos -> Para canjear Cupones. \n!raspe -> Evento de raspaditas 4 Semanas. \n!vell -> Horario boss mundial Vell \n!garmoth -> Horario boss mundial Garmoth \n!cocina -> Evento de cocina"
                , msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }

    if (msg.content.includes('!codigos')) {
        const embed = new RichEmbed()
            .setTitle('Canjear Codigos!')
            .setColor('#FFF300')
            .setDescription('Para canjear un codigo debes ingresar en https://blackdesert.playredfox.com/users/code \ny debes logearte con tu cuenta.', msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }

    if (msg.content.includes('!raspe')) {
        const embed = new RichEmbed()
            .setTitle('Evento Raspe!')
            .setColor('#FF0000')
            .setDescription('Para el poder raspar el cupon debes ingresar en \n https://blackdesert.playredfox.com/black_desert/scratch_event/bonus \ny debes logearte con tu cuenta. ', msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }

    if (msg.content.includes('!vell')) {
        const embed = new RichEmbed()
            .setTitle('VELL')
            .setColor('#0099ff')
            .setDescription('El Jefe mundial VELL sale los:\n Viernes :flag_br: 00:15 - :flag_ar: 00:15\nJueves  :flag_cl: 23:15 - :flag_cr: 21:15 - :flag_co: 22:15\n Domingo :flag_br: 18:00 - :flag_cl: 17:00 -  :flag_co: 16:00 -  :flag_cr: 15:00 - :flag_ar: 18:00 \n\nNos juntamos 30 Min antes en Velia', msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }

    if (msg.content.includes('!garmoth')) {
        const embed = new RichEmbed()
            .setTitle('GARMORTH')
            .setColor('#FF9300')
            .setDescription('El Jefe mundial GARMOTH sale los:\n\n Lunes :flag_cl: 22:30 - :flag_co: 21:30 - :flag_cr: 20:30 - :flag_ar: 23:30\n Miercoles :flag_cl: 22:30 - :flag_co: 21:30 - :flag_cr: 20:30 - :flag_ar: 23:30 \nViernes :flag_cl: 22:30 - :flag_co: 21:30 - :flag_cr: 20:30 - :flag_ar: 23:30', msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }

    if (msg.content.includes('!cocina')) {
        const embed = new RichEmbed()
            .setTitle('Evento Cocina!')
            .setColor('#FF0000')
            .setDescription('Evento de cocina en \n https://blackdesert-forums.playredfox.com/index.php?threads/%C2%A1festival-culinario-de-martina-finto.41493/ \n\n Valido Hasta el 28 de abril de 2021 (antes del mantenimiento)', msg.author.username)
            .setAuthor('ColdSkulls Ayuda!', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')
            .setTimestamp()
	        .setFooter("ColdSkulls Ayuda!", "https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png");
        msg.channel.send(embed);
    }



});



const token = 'TOKEN AQUI';
client.login(token);
