const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/CtaexU3.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ 🇦 🇵 🇦 🇷 🇳 🇦  🇲 🇼 🇴 🇱  *

*Cʀᴇᴀᴛᴇʀ number : wa.me/918281370025?text=Hi%20ᴀᴍʀᴜ%20bro.%20*


 *Kᴀʟɪᴘᴘᴀɴ sᴇʀ Cʜᴀɴᴀʟ : https://youtube.com/channel/UC0yNrBziB3u2hzvXzJ4NnTA😁*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/its_me_dron?utm_medium=copy_link*

 *Aᴘᴀʀɴᴀ Mᴡᴏʟ ʙᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/CDNbORWtY1KCPyrm5qNyIl*

 *Gɪᴛ Lɪɴᴋ : https://github.com/Midhun-kalippan/Aparna-Mwol*

 *Aᴘᴀʀɴᴀ Mᴡᴏʟ↹🎀ꫂ⁩..♡︎*
`}) 

}));
