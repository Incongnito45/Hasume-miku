let handler=async(_0x18991d,{conn:_0x113e8b,isOwner:_0x492970})=>{let _0x3a8cfc=Object['entries'](global['db']['data']['chats'])['filter'](_0x23d326=>_0x23d326[0x1]['isBanned']),_0x41ec02=Object['entries'](global['db']['data']['users'])['filter'](_0x5befc6=>_0x5befc6[0x1]['banned']),_0x59e639=('\x0a┌〔\x20𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒\x20𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒\x20〕\x0a├\x20Total\x20:\x20'+_0x41ec02['length']+'\x20'+(_0x41ec02?'\x0a'+_0x41ec02['map'](([_0x2e7cea],_0x2398d9)=>('\x0a├\x20'+(_0x492970?'@'+_0x2e7cea['split']`@`[0x0]:_0x2e7cea))['trim']())['join']('\x0a'):'├')+'\x0a└────\x0a\x0a┌〔\x20𝐂𝐇𝐀𝐓𝐒\x20𝐁𝐀𝐍𝐄𝐀𝐃𝐎𝐒\x20〕\x0a├\x20Total\x20:\x20'+_0x3a8cfc['length']+'\x20'+(_0x3a8cfc?'\x0a'+_0x3a8cfc['map'](([_0x290e02],_0x59391f)=>('\x0a├\x20'+(_0x492970?'@'+_0x290e02['split']`@`[0x0]:_0x290e02))['trim']())['join']('\x0a'):'├')+'\x0a└────\x0a')['trim']();_0x18991d['reply'](_0x59e639,null,{'mentions':_0x113e8b['parseMention'](_0x59e639)});};handler['command']=/^banlist(ned)?|ban(ned)?list|daftarban(ned)?$/i,handler['rowner']=!![];export default handler;