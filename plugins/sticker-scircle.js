import _0x20dc15 from'../lib/uploadImage.js';import{sticker}from'../lib/sticker.js';let handler=async(_0x18049c,{conn:_0x4601c9,text:_0x423627})=>{let _0xd4475d={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x18049c['sender']['split']('@')[0x0]+':'+_0x18049c['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};try{let _0x4a5886=_0x18049c['quoted']?_0x18049c['quoted']:_0x18049c,_0xedcbcd=(_0x4a5886['msg']||_0x4a5886)['mimetype']||'',_0x2252af=await _0x4a5886['download'](),_0xd06219=await _0x20dc15(_0x2252af),_0x482b79=global['API']('dzx','/api/canvas/circle',{'url':_0xd06219}),_0x26be84=await sticker(null,_0x482b79,global['igfg'],global['author']);_0x4601c9['sendFile'](_0x18049c['chat'],_0x26be84,'sticker.webp','',_0x18049c,{'asSticker':!![]});}catch(_0x2200cb){_0x4601c9['reply'](_0x18049c['chat'],'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙻𝙾\x20𝚂𝙸𝙴𝙽𝚃𝙾,\x20𝙾𝙲𝚄𝚁𝚁𝙸𝙾\x20𝚄𝙽\x20𝙴𝚁𝚁𝙾𝚁,\x20𝚅𝚄𝙴𝙻𝚅𝙰\x20𝙰\x20𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾,\x20𝙽𝙾\x20𝙾𝙻𝚅𝙸𝙳𝙴\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁\x20𝙰\x20𝚄𝙽𝙰\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙻𝙰\x20𝙲𝚄𝙰𝙻\x20𝚂𝙴\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁𝙰\x20𝙴𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁\x20𝙲𝙸𝚁𝙲𝚄𝙻𝙰𝚁*',_0xd4475d,_0x18049c);}};handler['command']=/^scircle|circle$/i;export default handler;