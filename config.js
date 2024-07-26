const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '꧁𓊈𒆜phink's 𝐃𝚵𝛁𝚰𝐋'𝐒 𒆜𓊉꧂' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE8wL01MTEQ1SG1KSnJvTDJLcWJhZ0d2UDN0R2FyQ1pyYXdNTmlYNUFtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFg4bmhsUTg3Nmd5WDJEVUpsN2pVVmE5TWVMNTFnaWlBTVhWdzJQZEhUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSjhrTGI3cms3R3RJOU9NUW5mOGRsK21GOWpTVVkvRjNCMGlNa25iWm00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoTGNPQXMvMUZwWmdwK2FCNEVMaVkwVzAxMHB4VUJzNGxoeXd0OVNhZGhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJZVN4U2h5Tk5LWTBoMWdDTUxkVllkOVJwT1RWVUdra2NCeWJiSzgwRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBOTJOT1RzMG5yS1U2clpacFJYSzlFRFhlYWQ1K2JERGw3b3Vjb09FbXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJJeUJIYXV0dVYzNmFnT1NNWnZZRjNuWkhVK0l0TldYYTE2M3dHZW8ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHJjUFhGb21DL2g5TDBzRlRhcFVlTGhIRFFxbE5QSlo5dnEyUkRKemdYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDRFBZUVBaOTYwSWhKbW84bjJuRzZnd0lsR1kxUVAyOUJ6d1JoOU14ODNpOU5jU0NaNWUva1NJaVlMTWhkU2ZNeUNiWUVmOU9oZDFlbnhkVE1PN0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiIzRkxwUUhiM2V3WGgvUGlONEZNczQxZk5tWHQ3dHh0aDAxM0dWZTJwc1hVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEQzRFdzREVVE0YVZPVVFLdEoydk9nIiwicGhvbmVJZCI6Ijc3MzQ5MzZlLWJlY2YtNGMwOC1hM2FhLWE4MDZlMDlhMzk5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWGI4OTN6cVlTSldhSTFsQmNPaXA3QXZHU0U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNSdXUvRUgvWEZFU1htRUdEbXZISFhHNll1cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luSDdlOEZFSkxKanJVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9RcFpSaTRpWUlia0VqZWhaaW9SNjRHYzR2U2s3cXBYajZ2K0NTaE1CZ0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZNNCt3eit5WlExWkp4czdQTm1xeit4VzlvSlpYbGx5cVg5b1F3UUlvNXk0MnNIWTVyeERBNFFGemNYMnZQeXY3NEdZb0VCOFJqejN4VkRCRzJCRUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDWVZzZFZVcFU0d3JmZWxHUGNocHdzS0lBK2ZwT09kQ2poY3FsNVlGYkdnYWc4R3FJLzZwUGR3eW95K2V0UVJqZkJaQ0pDNG5yY1dyeGlhN2EvVk1DUT09In0sIm1lIjp7ImlkIjoiMjI1NjY3NTcxMzI6MjNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NjY3NTcxMzI6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGtLV1VZdUltQ0c1Qkkzb1dZcUVldUJuT0wwcE82cVY0K3IvZ2tvVEFZQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjAwMDU1M30= : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
