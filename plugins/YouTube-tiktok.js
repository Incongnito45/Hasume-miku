import _0x30dbce from'api-dylux';import _0x139179 from'axios';import _0x17eb29 from'cheerio';import{generateWAMessageFromContent}from'@whiskeysockets/baileys';import{tiktokdl}from'@bochilteam/scraper';let handler=async(_0x4cc5b4,{conn:_0x201f26,text:_0x54f8fc,args:_0x5cc6e7,usedPrefix:_0x4ac56c,command:_0x61f66})=>{if(!_0x54f8fc)throw'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚃𝙸𝙺𝚃𝙾𝙺\x20𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴,\x20𝙿𝙾𝚁\x20𝙵𝙰𝚅𝙾𝚁\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝙴𝙽\x20𝙴𝙽𝙻𝙰𝙲𝙴/𝙻𝙸𝙽𝙺\x20𝙳𝙴\x20𝙰𝙻𝙶𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙴\x20𝚃𝙸𝙺𝚃𝙾𝙺*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*'+(_0x4ac56c+_0x61f66)+'*\x20https://vm.tiktok.com/ZM2M1cAGR/*\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]*MISSING\x20TIK\x20TOK\x20LINK\x20LINK\x20OF\x20SOME\x20TIKTOK\x20VIDEO*\x0a\x0a\x20*EXAMPLE*\x0a*'+(_0x4ac56c+_0x61f66)+'*\x20https://vm.tiktok.com/ZM2M1cAGR/*';if(!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi['test'](_0x54f8fc))throw'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚃𝙸𝙺𝚃𝙾𝙺\x20𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾,\x20𝙿𝙾𝚁\x20𝙵𝙰𝚅𝙾𝚁\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝙴𝙽\x20𝙴𝙽𝙻𝙰𝙲𝙴/𝙻𝙸𝙽𝙺\x20𝙳𝙴\x20𝙰𝙻𝙶𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙴\x20𝚃𝙸𝙺𝚃𝙾𝙺*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*'+(_0x4ac56c+_0x61f66)+'*\x20https://vm.tiktok.com/ZM2M1cAGR/\x0a\x0a\x0a*[❗𝐈𝐍𝐅𝐎❗]\x20*INCORRECT\x20TIKTOK\x20LINK\x20PLEASE\x20ENTER\x20LINK\x20OF\x20SOME\x20TIKTOK\x20VIDEO*\x0a\x0a*EXAMPLE*\x0a*'+(_0x4ac56c+_0x61f66)+'*\x20https://vm.tiktok.com/ZM2M1cAGR/';let _0x34f9b4='*[❗]\x20@'+_0x4cc5b4['sender']['split']`@`[0x0]+'\x20𝙰𝙶𝚄𝙰𝚁𝙳𝙴\x20𝚄𝙽\x20𝙼𝙾𝙼𝙴𝙽𝚃𝙾\x20𝙴𝙽\x20𝙻𝙾\x20𝚀𝚄𝙴\x20𝙴𝙽𝚅𝙸𝙾\x20𝚂𝚄\x20𝚅𝙸𝙳𝙴𝙾\x20𝙳𝙴\x20𝚃𝙸𝙺𝚃𝙾𝙺*';try{let _0x461357={'quoted':_0x4cc5b4,'userJid':_0x201f26['user']['jid']},_0x21ae15=generateWAMessageFromContent(_0x4cc5b4['chat'],{'extendedTextMessage':{'text':_0x34f9b4,'contextInfo':{'externalAdReply':{'title':'⫷᭄©body-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍','body':null,'thumbnail':imagen1,'sourceUrl':'https://github.com/OFC-YOVANI/HADES-OMEGA'},'mentionedJid':[_0x4cc5b4['sender']]}}},_0x461357);await _0x201f26['relayMessage'](_0x4cc5b4['chat'],_0x21ae15['message'],{'messageId':_0x21ae15['key']['id'],'mentions':[_0x4cc5b4['sender']]});const _0x7af76d=await tiktok['v1'](_0x5cc6e7[0x0]);let _0x57c71c='*¡Hola!\x20🌟*\x0a*📽️\x20Aquí\x20tienes\x20tu\x20video\x20de\x20TikTok.*\x0a\x0a*Recuerda\x20que\x20si\x20deseas\x20convertir\x20el\x20video\x20en\x20audio,\x20puedes\x20hacerlo\x20fácilmente\x20respondiendo\x20al\x20video\x20con\x20el\x20comando\x20#tomp3\x20🎧.*\x0a\x0a\x0a*Hello!\x20🌟*\x0a*📽️\x20Here\x27s\x20your\x20TikTok\x20video.*\x0a\x0a*Remember\x20that\x20if\x20you\x20want\x20to\x20convert\x20the\x20video\x20to\x20audio,\x20you\x20can\x20easily\x20do\x20so\x20by\x20replying\x20to\x20the\x20video\x20with\x20the\x20#tomp3\x20command\x20🎧.*';await _0x201f26['sendMessage'](_0x4cc5b4['chat'],{'video':{'url':_0x7af76d['play']},'caption':_0x57c71c},{'quoted':_0x4cc5b4});}catch(_0x495012){try{const _0x1b846f=await tiktokdlF(_0x5cc6e7[0x0]);let _0x4e0e24='*¡Hola!\x20🌟*\x0a*📽️\x20Aquí\x20tienes\x20tu\x20video\x20de\x20TikTok.*\x0a\x0a*Recuerda\x20que\x20si\x20deseas\x20convertir\x20el\x20video\x20en\x20audio,\x20puedes\x20hacerlo\x20fácilmente\x20respondiendo\x20al\x20video\x20con\x20el\x20comando\x20#tomp3\x20🎧.*\x0a\x0a\x0a*Hello!\x20🌟*\x0a*📽️\x20Here\x27s\x20your\x20TikTok\x20video.*\x0a\x0a*Remember\x20that\x20if\x20you\x20want\x20to\x20convert\x20the\x20video\x20to\x20audio,\x20you\x20can\x20easily\x20do\x20so\x20by\x20replying\x20to\x20the\x20video\x20with\x20the\x20#tomp3\x20command\x20🎧.*';await _0x201f26['sendMessage'](_0x4cc5b4['chat'],{'video':{'url':_0x1b846f['video']},'caption':_0x4e0e24},{'quoted':_0x4cc5b4});}catch(_0x3bd361){try{let _0x27d0ec=await _0x30dbce['tiktok'](_0x5cc6e7[0x0]),_0x25f03d='*¡Hola!\x20🌟*\x0a*📽️\x20Aquí\x20tienes\x20tu\x20video\x20de\x20TikTok.*\x0a\x0a*Recuerda\x20que\x20si\x20deseas\x20convertir\x20el\x20video\x20en\x20audio,\x20puedes\x20hacerlo\x20fácilmente\x20respondiendo\x20al\x20video\x20con\x20el\x20comando\x20#tomp3\x20🎧.*\x0a\x0a\x0a\x20Hello!\x20🌟*\x0a*📽️\x20Here\x27s\x20your\x20TikTok\x20video.*\x0a\x0a*Remember\x20that\x20if\x20you\x20want\x20to\x20convert\x20the\x20video\x20to\x20audio,\x20you\x20can\x20easily\x20do\x20so\x20by\x20replying\x20to\x20the\x20video\x20with\x20the\x20#tomp3\x20command\x20🎧.*';await _0x201f26['sendMessage'](_0x4cc5b4['chat'],{'video':{'url':_0x27d0ec['nowm']},'caption':_0x25f03d},{'quoted':_0x4cc5b4});}catch(_0x9fe613){try{const {author:{nickname:_0x4608ae},video:_0x5997b1,description:_0x314c51}=await tiktokdl(_0x5cc6e7[0x0])['catch'](async _0x399578=>await tiktokdlv2(_0x5cc6e7[0x0]))['catch'](async _0x248d5a=>await tiktokdlv3(_0x5cc6e7[0x0])),_0x5058c4=_0x5997b1['no_watermark2']||_0x5997b1['no_watermark']||'https://tikcdn.net'+_0x5997b1['no_watermark_raw']||_0x5997b1['no_watermark_hd'];let _0x439555='*¡Hola!\x20🌟*\x0a*📽️\x20Aquí\x20tienes\x20tu\x20video\x20de\x20TikTok.*\x0a\x0a*Recuerda\x20que\x20si\x20deseas\x20convertir\x20el\x20video\x20en\x20audio,\x20puedes\x20hacerlo\x20fácilmente\x20respondiendo\x20al\x20video\x20con\x20el\x20comando\x20#tomp3\x20🎧.*\x0a\x0a\x0a*Hello!\x20🌟*\x0a*📽️\x20Here\x27s\x20your\x20TikTok\x20video.*\x0a\x0a*Remember\x20that\x20if\x20you\x20want\x20to\x20convert\x20the\x20video\x20to\x20audio,\x20you\x20can\x20easily\x20do\x20so\x20by\x20replying\x20to\x20the\x20video\x20with\x20the\x20#tomp3\x20command\x20🎧.*';await _0x201f26['sendMessage'](_0x4cc5b4['chat'],{'video':{'url':_0x5058c4},'caption':_0x439555},{'quoted':_0x4cc5b4});}catch{throw''+_0x30dbce;}}}}};handler['command']=/^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;export default handler;async function tiktokdlF(_0x123c52){if(!/tiktok/['test'](_0x123c52))return'Enlace\x20incorrecto';const _0x3f1918=await _0x139179['get']('https://tikdown.org/id'),_0x2c989e=_0x17eb29['load'](_0x3f1918['data']),_0x33a5a3=_0x2c989e('#download-form\x20>\x20input[type=hidden]:nth-child(2)')['attr']('value'),_0x44c940={'url':_0x123c52,'_token':_0x33a5a3},{data:_0x281db8}=await _0x139179['request']('https://tikdown.org/getAjax?',{'method':'post','data':new URLSearchParams(Object['entries'](_0x44c940)),'headers':{'content-type':'application/x-www-form-urlencoded;\x20charset=UTF-8','user-agent':'Mozilla/5.0\x20(Windows\x20NT\x206.3;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.88\x20Safari/537.36'}});var _0x252ec4=_0x17eb29['load'](_0x281db8['html']);if(_0x281db8['status'])return{'status':!![],'thumbnail':_0x252ec4('img')['attr']('src'),'video':_0x252ec4('div.download-links\x20>\x20div:nth-child(1)\x20>\x20a')['attr']('href'),'audio':_0x252ec4('div.download-links\x20>\x20div:nth-child(2)\x20>\x20a')['attr']('href')};else return{'status':![]};}