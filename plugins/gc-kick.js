let handler=async(_0x29db59,{conn:_0x16d312,participants:_0x3e004e,usedPrefix:_0x2529ac,command:_0x52e08a})=>{if(!global['db']['data']['settings'][_0x16d312['user']['jid']]['restrict'])throw'*[\x20⚠️\x20]\x20𝙴𝙻\x20𝙾𝚆𝙽𝙴𝚁\x20𝚃𝙸𝙴𝙽𝙴\x20𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝙳𝙾\x20(𝚎𝚗𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝\x20/\x20𝚍𝚒𝚜𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝)\x20𝙴𝙻\x20𝚄𝚂𝙾\x20𝙳𝙴\x20𝙴𝚂𝚃𝙴\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x0a\x0a\x0a[\x20⚠️\x20]*THE\x20OWNER\x20HAS\x20RESTRICTED\x20*(𝚎𝚗𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝\x20/\x20𝚍𝚒𝚜𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝)*USING\x20THIS\x20COMMAND*';let _0x1e0d24='*[❗]\x20𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴\x20𝙰\x20𝚄𝙽𝙰\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰\x20𝙾\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰\x20𝙰\x20𝚄𝙽\x20𝙼𝙴𝙽𝚂𝙰𝙹𝙴\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾\x20𝙿𝙰𝚁𝙰\x20𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁\x20𝙰𝙻\x20𝚄𝚂𝚄𝙰𝚁𝙸𝙾*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*'+(_0x2529ac+_0x52e08a)+'\x20@'+global['suittag']+'*\x0a\x0a\x0a*[❗]\x20TAG\x20A\x20PERSON\x20OR\x20REPLY\x20TO\x20A\x20GROUP\x20MESSAGE\x20TO\x20REMOVE\x20THE\x20USER\x20:*\x0a*'+(_0x2529ac+_0x52e08a)+'\x20@'+global['suittag']+'*';if(!_0x29db59['mentionedJid'][0x0]&&!_0x29db59['quoted'])return _0x29db59['reply'](_0x1e0d24,_0x29db59['chat'],{'mentions':_0x16d312['parseMention'](_0x1e0d24)});let _0x4edcfa=_0x29db59['mentionedJid'][0x0]?_0x29db59['mentionedJid'][0x0]:_0x29db59['quoted']['sender'],_0x31c1b5=_0x29db59['chat']['split']`-`[0x0];await _0x16d312['groupParticipantsUpdate'](_0x29db59['chat'],[_0x4edcfa],'remove');};handler['command']=/^(kick|echar|hechar|sacar)$/i,handler['admin']=!![],handler['group']=!![],handler['botAdmin']=!![];export default handler;