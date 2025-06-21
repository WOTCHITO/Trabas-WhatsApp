/*

credits © All Creators Script Zedezada
*/


const fs = require('fs')
global.prefa = ['573507594335'] 
global.botname = "⨭͛͠𝐙𝐄̶͓𝐃̷𝐄͡𝐙͍̽𝐀͡𝐃𝐀̚" // Nexus bot
global.version = "2" // Versi SC
global.owner = "" // Eder Owner Bot
global.numberbot = "" // Nexus bot
global.footer = ""
global.title = "© ᴄʀᴇᴀᴛᴏʀ sᴄʀɪᴘᴛ Eder"
global.website = "https://whatsapp.com/channel/0029VaFMguNDTkJzaPGXAG3D"
global.idch = "120363218713824827@newsletter"
global.chjid = "https://whatsapp.com/channel/0029VaFMguNDTkJzaPGXAG3D"
global.wm = ""

//===================================//
global.session = "session"

//========= [ API CPANEL ] ==========//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc
global.linkadp = "-" //link group adp

//=========== [ IMG-URL ] ===========//
global.thumb = "https://files.catbox.moe/cfkh9x.jpg"
global.image = {
Reply: "https://files.catbox.moe/cfkh9x.jpg"
}
//==================================//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
