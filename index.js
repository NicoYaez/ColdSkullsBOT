const { Client, RichEmbed } = require('discord.js');
var cron = require('node-cron');

const client = new Client();

client.on('ready', () => {
    console.log('Bot Conectado!');
    client.user.setStatus('online'); // online, idle, invisible, dnd
});



//MENSAJES

const karanda = new RichEmbed()
        .setTitle('Salio Karanda! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044917.png')
        .setDescription('Drop :trophy: Arma Despertar (Dandelion)')
        .setImage('https://akamai-webcdn.blackdesertonline.com/bdo/resources/news/include/c6fa888b388fb8dd9248e27a10f9b4c0.jpg')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const kzarka = new RichEmbed()
        .setTitle('Salio Kzarka! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00015991.png')
        .setDescription('Drop :trophy: Arma Principal (Kzarka)')
        .setImage('https://bdops4.files.wordpress.com/2020/02/black-desert-online-big-fella-1.png?w=1200')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const nouver = new RichEmbed()
        .setTitle('Salio Nouver! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044915.png')
        .setDescription('Drop :trophy: Arma Secundaria (Nouver)')
        .setImage('https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/28674304/c4f4149040990f6f5ee4c5b982fcd3b6469ddbcd.png')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const kutum = new RichEmbed()
        .setTitle('Salio Kutum! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/00044920.png')
        .setDescription('Drop :trophy: Arma Secundaria (Kutum)')
        .setImage('https://lh3.googleusercontent.com/3UD6mE51AIsovjBUVA6Kq8r1ag9Cfr9yxl58oOLRD8KiB-DXcgEZgKGaKL6WB-iBzaBfw0nhRuwuv_o4g7PKndQnBxgI7ONF4p-0oRppa-4vKSerrBRDxgqVbftYhVIvfat7iMKQ')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const vell = new RichEmbed()
        .setTitle('Salio Vell! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/04_dropitem/00044335.png')
        .setDescription('Drop :trophy: Poder Mágico Concentrado de Vell')
        .setImage('https://i2.wp.com/dgea.es/wp-content/uploads/2019/08/101559f26e2b007c70268d66cef39b50.jpg?fit=1024%2C427&ssl=1')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const garmoth = new RichEmbed()
        .setTitle('Salio Garmoth! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/04_dropitem/00044362.png')
        .setDescription('Drop :trophy: Corazón de Garmoth')
        .setImage('https://www.gamerevolution.com/assets/uploads/2020/04/Black-Desert-Garmoth-boss-battle-guilds.jpg')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const offin = new RichEmbed()
        .setTitle('Salio Offin! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044963.png')
        .setDescription('Drop :trophy: Arma Principal (Offin)')
        .setImage('https://lh4.googleusercontent.com/TItmWYpSL9Xq235cUJX3NzzZg3BOZYxt3-x9ukfgwZAQqoxLgcE480z5AnbYl2018uJidWom4Y9_EUorpspsKXskK6WBuksdPhwOGekL00B2v0ixhnHvDhiwmR6kxoUrndtgHd6M')
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const muraka = new RichEmbed()
        .setTitle('Salio Muraka! :four_leaf_clover:')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/04_dropitem/00016520.png')
        .setDescription('Drop :trophy: Anillo de ogro sombrío')
        .setImage("https://massivelyop.com/wp-content/uploads/2017/11/Muraka027.jpg")
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

const quint = new RichEmbed()
        .setTitle('Salio Quint! :four_leaf_clover:')
        .setColor('#FF0000')
        .setDescription('Drop :trophy: Estatua de Quint :V')
        .setImage("https://s1.pearlcdn.com/SEA/Upload/News/eacec61278720180918191829658.png")
        .setAuthor('ColdSkulls', 'https://cdn.discordapp.com/attachments/639904843888197674/831627776821035098/Logodcc.png')

//30 MIN 
const vell_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Vell!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/04_dropitem/00044335.png')
        .setDescription('Drop :trophy: Poder Mágico Concentrado de Vell')

const kzarka_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Kzarka!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00015991.png')
        .setDescription('Drop :trophy: Arma Principal (Kzarka)')

const kutum_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Kutum!')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/00044920.png')
        .setDescription('Drop :trophy: Arma Secundaria (Kutum)')

const nouver_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Nouver!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044915.png')
        .setDescription('Drop :trophy: Arma Secundaria (Nouver)')

const karanda_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Karanda!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044917.png')
        .setDescription('Drop :trophy: Arma Despertar (Dandelion)')

const garmoth_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Garmoth!')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/04_dropitem/00044362.png')
        .setDescription('Drop :trophy: Corazón de Garmoth')

const offin_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Offin!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/00044963.png')
        .setDescription('Drop :trophy: Arma Principal (Offin)')

const muraka_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Muraka!')
        .setColor('#FF0000')
        .setThumbnail('https://bdocodex.com/items/new_icon/03_etc/04_dropitem/00016520.png')
        .setDescription('Drop :trophy: Anillo de ogro sombrío')

const quint_30 = new RichEmbed()
        .setTitle(':clock3: Quedan 30 Min Para Quint!')
        .setColor('#FF0000')
        .setDescription('Drop :trophy: Estatua de Quint :V')

const raspe = new RichEmbed()
        .setTitle(':clock3: Tiren Su Raspe!')
        .setColor('#FF0000')
        //.setThumbnail('https://bdocodex.com/items/new_icon/03_etc/04_dropitem/00016520.png')
        .setDescription('Recuerden Raspar su Raspe :D -> !raspe')

//JUNTA
const junta = new RichEmbed()
        .setTitle(':clock3: En 10 Min Nos Juntamos Para Vell!')
        .setColor('#FF0000')
        .setThumbnail('https://bddatabase.net/items/new_icon/03_etc/04_dropitem/00044335.png')
        .setDescription('Drop :trophy: Poder Mágico Concentrado de Vell')
        .addField('Nos juntamos en Velia en el servidor Velia 2', 'No se salgan del gremio si se bugean en el barco sino bajaremos a gremio chico :c', true)
        //.setDescription('Nos juntamos en Velia en el servidor Velia 2')


//PROGRAMA
//VELL
cron.schedule("15 23 * * 4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(vell); //Vell Jueves 23:15
});
cron.schedule("0 17 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(vell); //Vell Domingo 17:00
});

//JUNTA
cron.schedule("35 22 * * 4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(`<@&827968234070343740> <@&827968110631190549> `,junta); //Vell Jueves 23:15
});
cron.schedule("20 16 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(`<@&827968234070343740> <@&827968110631190549> `,junta); //Vell Domingo 17:00
});

//30 MIN
cron.schedule("45 22 * * 4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(vell_30); //Vell Jueves 23:15
});
cron.schedule("30 16 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(vell_30); //Vell Domingo 17:00
});

//GARMOTH
cron.schedule("30 22 * * 1,3,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(garmoth); //Garmoth Lunes, Miercoles, Viernes 22:30
});

//30 MIN
cron.schedule("0 22 * * 1,3,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(garmoth_30); //Garmoth Lunes, Miercoles, Viernes 22:30
});

//KARANDA
cron.schedule("0 1 * * 1,4,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda); //Karanda Lunes, Jueves, Viernes 1:00
});
cron.schedule("0 10 * * 3,4,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda); //Karanda Miercoles,Jueves,Sabado 10:00
});
cron.schedule("0 15 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda); //Karanda Domingo 15:00
});
cron.schedule("0 19 * * 2,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda); //Karanda Martes,Domingo 19:00
});

//30 MIN
cron.schedule("30 0 * * 1,4,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda_30); //Karanda Lunes, Jueves, Viernes 1:00
});
cron.schedule("30 9 * * 3,4,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda_30); //Karanda Miercoles,Jueves,Sabado 10:00
});
cron.schedule("30 14 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda_30); //Karanda Domingo 15:00
});
cron.schedule("30 18 * * 2,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(karanda_30); //Karanda Martes,Domingo 19:00
});

//KZARKA
cron.schedule("0 1 * * 1,3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka); //Kzarka Lunes,Miercoles,Sabado 1:00
});
cron.schedule("0 10 * * 2,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka); //Kzarka Martes,Sabado 10:00
});
cron.schedule("0 15 * * 1,3,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka); //Kzarka 15:00
});
cron.schedule("0 19 * * 2,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka); //Kzarka 19:00
});

//30 MIN
cron.schedule("30 0 * * 1,3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka_30); //Kzarka Lunes,Miercoles,Sabado 1:00
});
cron.schedule("30 9 * * 2,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka_30); //Kzarka Martes,Sabado 10:00
});
cron.schedule("30 14 * * 1,3,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka_30); //Kzarka 15:00
});
cron.schedule("30 18 * * 2,5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kzarka_30); //Kzarka 19:00
});

//KUTUM
cron.schedule("0 1 * * 2,4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum); //Kutum
});
cron.schedule("0 10 * * 3,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum); //Kutum
});
cron.schedule("0 15 * * 1,2,4,5,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum); //Kutum
});
cron.schedule("0 19 * * 1,4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum); //Kutum
});

//30 MIN
cron.schedule("30 0 * * 2,4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum_30); //Kutum
});
cron.schedule("30 9 * * 3,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum_30); //Kutum
});
cron.schedule("30 14 * * 1,2,4,5,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum_30); //Kutum
});
cron.schedule("30 18 * * 1,4 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(kutum_30); //Kutum
});

//NOUVER
cron.schedule("0 1 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver); //Nouver
});
cron.schedule("0 10 * * 1,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver); //Nouver
});
cron.schedule("0 15 * * 2,3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver); //Nouver
});
cron.schedule("0 19 * * 1,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver); //Nouver
});

//30 MIN
cron.schedule("30 0 * * 7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver_30); //Nouver
});
cron.schedule("30 9 * * 1,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver_30); //Nouver
});
cron.schedule("30 14 * * 2,3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver_30); //Nouver
});
cron.schedule("30 18 * * 1,4,5,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(nouver_30); //Nouver
});

//OFFIN
cron.schedule("30 22 * * 2,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(offin); //offin
});
cron.schedule("0 1 * * 5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(offin); //offin
});

//30 MIN
cron.schedule("0 21 * * 2,7 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(offin_30); //offin
});
cron.schedule("30 0 * * 5 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(offin_30); //offin
});

//QUINT
cron.schedule("0 19 * * 3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(quint); //QUINT
});
//30 MIN
cron.schedule("30 18 * * 3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(quint_30); //QUINT
});

//MURAKA
cron.schedule("0 19 * * 3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(muraka); //MURAKA
});
//30 MIN
cron.schedule("30 18 * * 3,6 ", function(){
    client.channels.find(c => c.name === 'anuncios').send(muraka_30); //MURAKA
});

//Raspe
cron.schedule("0 23 * * * ", function(){
    client.channels.find(c => c.name === 'anuncios').send(`<@&827968234070343740> <@&827968110631190549> `,raspe); //MURAKA
});


const gif = new RichEmbed()
        .setImage("https://media1.tenor.com/images/947354ffc8c700fec41c01c501dbf0f2/tenor.gif?itemid=19488467")
const gifok = new RichEmbed()
        .setImage("https://media.tenor.com/images/750668c82c8edac6d18e6352fd494a40/tenor.gif")



client.on('message', msg => {
    if (msg.content === 'hola' || msg.content === 'Hola' ) {
        msg.channel.send(`Hola ${msg.author}`, gif);
    }
    if (msg.content === 'ok' || msg.content === 'Ok' ) {
        msg.channel.send(gifok);
    }

});

//TOKEN
const token = TOKEN AQUI;
client.login(token);
