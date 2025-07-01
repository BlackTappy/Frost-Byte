/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || '';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || 'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i';
const packname = process.env.STICKER_PACKNAME || 'ʄʀօֆᴛ-ɮʏᴛɛ-𐌀i';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254756360306';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/2p885c.jpg;
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '*Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ 𐌀ɖოɨռֆ օռʟʏ!*';
const group = process.env.GROUP_ONLY_MSG || '*Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ ɢʀօʊքֆ օռʟʏ!*';
const botAdmin = process.env.BOT_ADMIN_MSG || '*ɨ ռɛɛɖ 𐌀ɖʍɨռ քʀɨʋɨʟɛɢɛֆ 𐌕օ ɛxɛƈʊ𐌕ɛ ƈօოო𐌀ռɖֆ!*';
const NotOwner = process.env.NOT_OWNER_MSG || '*Ꮳօოო𐌀ռɖֆ ʀɛֆɛʀʋɛɖ ʄօʀ ₮ཏɛ օཡռɛʀ!*';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
