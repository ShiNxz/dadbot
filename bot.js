import { Client, MessageEmbed } from 'discord.js'
import * as dotenv from 'dotenv'

dotenv.config()
const client = new Client()

const getRandomInt = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

client.login(process.env.TOKEN)

const PREFIX = '!'

client.on('ready', async () => {
	console.log(`================================================`)
	console.log('Dad is back!')
	console.log(`Working on ${client.guilds.cache.array().length} Servers.`)
	console.log(`Working for ${client.users.cache.array().length} Users.`)
	client.user.setPresence({
		activity: { name: `${client.users.cache.array().length} ילדים | ${PREFIX}dad `, type: `WATCHING` },
	})
	console.log(`Current Bot Status: ${client.user.presence.status}.`)
	console.log(`Current Bot Name: ${client.user.username}`)
	console.log(`================================================`)
})

client.on('guildCreate', (guild) => {
	const channel = guild.channels.cache.find(
		(channel) => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES')
	)
	channel.send('שלום ילדים ותודה על ההזמנה!\nהשתמשו בפקודה ``!dad`` על מנת לצפות בפקודות ואפשרויות נוספות.')
	client.user.setPresence({
		activity: { name: `${client.users.cache.array().length} ילדים | ${PREFIX}dad `, type: `WATCHING` },
	})
})

client.on('message', async (message) => {
	if (message.author.bot) return
	if (message.channel.type === 'dm') return
	if (message.channel.parentID === '818561480647376896') return
	if (message.mentions.roles.size > 0 || message.mentions.users.size > 0) return
	if (message.content.includes('@everyone') || message.content.includes('@here')) return

	const args2 = message.content.trim().split(/ +/g)
	if (args2[0].toLowerCase() == "i'm" || args2[0].toLowerCase() == 'אני') {
		if (message.content === 'אני אבא') return message.channel.send('לא אתה לא, אני אבא!')
		return message.channel.send(`שלום ${args2.slice(1).join(' ')}, אני אבא!`)
	}
	if (message.content === 'אני אבא') {
		return message.channel.send('לא אתה לא, אני אבא!')
	}
	if (message.content === 'לא אתה לא') {
		return message.channel.send('כן אני כן')
	}
	if (args2[0].toLowerCase() == 'אבא' || args2[0].toLowerCase() == 'אבא?') {
		return message.channel.send(`אתה מאומץ`)
	}

	const rnd = getRandomInt(1, 100)
	if (rnd == 1) {
		message.channel.send('אתה מאומץ')
	}
})

client.on('message', (message) => {
	let args = message.content.substring(PREFIX.length).split(' ')
	if (message.author.bot) return
	switch (args[0]) {
		case 'dick':
			const penisSize = Math.floor(Math.random() * Math.floor(25))
			const penis = '='
			let person = message.guild.member(
				message.mentions.users.first() || message.guild.members.cache.get(args[1])
			)
			let joke
			if (penisSize <= 5) joke = '😂'
			if (penisSize > 5 && penisSize < 15) joke = '🫢'
			if (penisSize >= 15) joke = '😕'
			let dickEmbed = new MessageEmbed()
			if (person) dickEmbed.setTitle(`${person.user.username} Dick Size:`)
			if (!person) dickEmbed.setTitle(`${message.author.username} Dick Size:`)
			dickEmbed.setDescription(`8${penis.repeat(penisSize)}D \n ${joke}`)
			if (person) {
				if (person.user.id == '137254857710108672')
					dickEmbed.setDescription(`8======================================================D \n 😍`)
			}
			if (!person) {
				if (message.author.id == '137254857710108672')
					dickEmbed.setDescription(`8======================================================D \n 😍`)
			}
			message.channel.send(dickEmbed)
			//message.channel.send(`8${penis.repeat(penisSize)}D`);
			break

		case 'dad':
			let authorr = '``ShiNxz#0001``'
			let serversCount = `${client.guilds.cache.array().length}`
			let channelsCount = `${client.channels.cache.array().length}`
			let userCount = `${client.users.cache.array().length}`
			let mainEmbed = new MessageEmbed()
				.setTitle(`Dad Bot Information:`)
				.setDescription(
					`להוספת הבוט לשרת שלכם: 
        [discordapp.con/bot](https://discordapp.com/oauth2/authorize?client_id=722777042810044449&scope=bot&permissions=8)`
				)
				.setColor('#ff9933')
				.setAuthor('Dad Bot', 'https://i.imgur.com/vC48O5a.png', 'https://discord.gg/56sqH23')
				.addField(
					'**פקודות** • <:commands:725101186730164316>',
					'• **!dad :** ``לצפייה בפרטי הבוט``\n• **!userinfo :** ``לצפייה בפרטי המשתמש שלכם``\n• **!message :@user: :message: :** ``שליחת הודעה למשתמש מהשרת``',
					false
				)
				.addField(
					'**פקודות לאדמין** • <:adminc:725114232512839801>',
					'• **!userinfo :@user: :** ``לצפייה בפרטי המשתמש המתוייג``\n• **!clear :number: :** ``למחיקת הודעות``',
					false
				)
				.addField(
					'**עדכונים** • <:info2:725114233280266320>',
					'- פקודות חדשות:\n``!dad`` / ``!message``.\n- תיקונים.',
					false
				)
				.addField(
					'**מידע** • <:info2:725114233280266320>',
					`<:creator:725122004449231001>  **Creator:**  ${authorr}.
        <:website:725122005078114452>  **Website:**  [discord.gg/56sqH23](https://discord.gg/56sqH23)
        <:dis:725122004729987102>  **Main Discord:**  [discord.gg/56sqH23](https://discord.gg/56sqH23)
        <:js:725122550115467326>  **Other Bots:**  [trello.com/bots](https://trello.com/b/Xp2S7NEw/shinxz-discord-bots)
        `,
					true
				)
				.addField(
					'**סטטוס** • <:stats2:725114233217351680>',
					' ``' +
						`${client.guilds.cache.array().length}` +
						'`` **:שרתים**   <:servers:725124366676787211> \n``' +
						`${client.users.cache.array().length}` +
						'`` **:משתמשים**   <:users:725124366899085332> \n``' +
						`${client.channels.cache.array().length}` +
						'``  **:צאטים**   <:channels:725124366266007642> \n``' +
						`5` +
						'`` **:פקודות**   <:commands:725124366181859418>',
					true
				)
				.setFooter(`Information requested by ${message.author.username}`)
				.setTimestamp()
			message.channel.send(mainEmbed)
			break
	}
})
