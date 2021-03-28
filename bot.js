

require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);


client.on('ready', readyDiscord);


client.on('message', gotMessage);

replies_hello=['HI🙂','Hey There!☺👋','Woah! Hello👋🏻']

function gotMessage(msg){
    console.log(msg.content);
if (msg.content === 'Hello'){
    const index = Math.floor(Math.random() * replies_hello.length);
    msg.channel.send(replies_hello[index]);
}

if(msg.content == 'Happy Holi'){
    
    msg.channel.send('https://img2.pngio.com/holi-color-powder-png-hd-png-mart-holi-color-powder-png-500_500.png');
    msg.channel.send('Wanna Celebrate Holi With Organic Color????');
    msg.channel.send('Please Choose Colors Below to get procedue of making Organic Colors:');
    msg.channel.send('RED');
    msg.channel.send('Green')
    msg.channel.send('Magenta');
    msg.channel.send('Blue');
}

if(msg.content == 'Start'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Welcome to Organic Holi')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('Please Enter Desired Available Colors:')
	.setThumbnail('https://cloud-gizc44k5w-hack-club-bot.vercel.app/0i-2.png')
	.addFields(
		{ name: 'Red', value:'🔴',inline:true},
        { name: 'Blue', value:'🔵', inline:true},
		{ name: 'Yellow', value:'🟡', inline:true},
	)
    .addFields(
		{ name: 'Green', value:'🟢',inline:true},
        { name: 'Magenta', value:'🟣', inline:true},
        { name: '🎨', value:'🎊', inline:true},

	)
    msg.react('🆗');
msg.channel.send(exampleEmbed1);
}
if(msg.content == 'Red'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Procedure of Making Red Organic Color')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('Dry red hibiscus flowers until they’re crisp, and then grind them into a fine powder. You can also use red sandalwood for this one. You can add rice flour in equal quantities to increase the volume of the powder. For wet colours, boil peels of pomegranate in water.')
    .setImage('https://cloud-k261irs6v-hack-club-bot.vercel.app/3copy_of_copy_of_untitled-2.png');
    msg.react('🔴');

    msg.channel.send(exampleEmbed1);
}

if(msg.content == 'Yellow'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Procedure of Making Yellow Organic Color')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('You can blend turmeric powder with gram flour in a 1:2 ratio to make dry gulal. Alternatively, any yellow coloured flowers, such as marigold or yellow chrysanthemums, can be crushed and combined in water for wet colours.')
    .setImage('https://cloud-k261irs6v-hack-club-bot.vercel.app/2copy_of_copy_of_untitled-3.png');
    msg.react('🟡');
    msg.channel.send(exampleEmbed1);
}


if(msg.content == 'Green'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Procedure of Making Green Organic Color')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('To obtain a lovely green-colour, you can use henna or mehendi powder. In order to get a liquid paste, you can either mix the henna powder in water or oil or use any green leafy vegetables, such as spinach. Remember that henna soaked in water may leave slight stains on the skin.')
    .setImage('https://cloud-k261irs6v-hack-club-bot.vercel.app/4copy_of_copy_of_untitled.png');
    msg.react('🟢');
    msg.channel.send(exampleEmbed1);
}



if(msg.content == 'Magenta'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Procedure of Making Magenta Organic Color')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('Soak sliced beetroots in water, boil the mixture and leave it overnight. If you want a more pinkish shade, just dilute the concoction a little more. You can also use red onions for this one')
    .setImage('https://cloud-k261irs6v-hack-club-bot.vercel.app/1copy_of_copy_of_untitled-4.png');
msg.react('🟣');
    msg.channel.send(exampleEmbed1);
}



if(msg.content == 'Blue'){
    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Procedure of Making Blue Organic Color')
	.setAuthor('Organic Holi', 'https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg')
 
	.setDescription('Powdered blue hibiscus flower petals and rice flour can be used to obtain blue-coloured gulal. For wet colours, you can use crushed and dried jacaranda flowers mixed with water.')
    .setImage('https://cloud-k261irs6v-hack-club-bot.vercel.app/0copy_of_copy_of_untitled-5.png');
    msg.react('🔵');
    msg.channel.send(exampleEmbed1);
}


if(msg.content == 'Thankyou'){
    const exampleEmbed1 = new Discord.MessageEmbed()
    .setImage('https://i0.wp.com/versionweekly.com/wp-content/uploads/2020/03/Happy-Holi-Whatsapp-Status-Images.jpg');
    msg.react('😍');
    msg.react('🥰');
    msg.react('🥳');
    msg.channel.send(exampleEmbed1);
}








}

function readyDiscord(){
    console.log("🏆")
}