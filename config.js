require("./database/module")

//GLOBAL PAYMENT
global.storename = "ByyX STR"
global.dana = "082127568219"
global.qris = "-"


// GLOBAL SETTING
global.owner = "2348120055226"
global.namabot = "𝐒𝐋𝐀𝐘𝐄𝐑 𝐕𝟒͖"
global.nomorbot = "2348120055226"
global.namaCreator = "𝐄𝐌𝐏𝐄𝐑𝐎𝐑"
global.linkyt = "https://whatsapp.com/channel/0029VaN2eQQ59PwNixDnvD16"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500


//DOMAIN
global.domain = 'https://'

//APIKEY
global.apikey = 'ptla_HDAA07tpGoCk09LZTMbePt6FPrXLwlde1OCMlUbSu7T'

//CAPIKEY
global.capikey = 'ptlc_3215srTKIRGjGpgVb2jFF5TRaj4ROKd78WSnvdvv73q'

//GLOBAL EGGS
global.eggsnya = '15' 

//GLOBAL LOCATION
global.location = '1' 

//GLOBAL IMAGE URL
global.imageurl = 'https://vault.pictures/p/55018afae43d4485aee8c5a146d41cd3' 


//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = '-'
global.isLink = 'https://whatsapp.com/channel/0029VaN2eQQ59PwNixDnvD16'
global.packname = "𝐒𝐋𝐀𝐘𝐄𝐑 𝐕𝟒͖"
global.author = "𝐄𝐌𝐏𝐄𝐑𝐎𝐑"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
