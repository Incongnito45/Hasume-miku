const {DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore}=await import('@whiskeysockets/baileys'),{proto}=(await import('@whiskeysockets/baileys'))['default'];import _0x586ec7 from'qrcode';import _0x3d5fca from'fs';import _0x307e3b from'pino';import*as _0x11d8cf from'ws';const {child,spawn,exec}=await import('child_process'),{CONNECTING}=_0x11d8cf;import{makeWASocket}from'../lib/simple.js';let crm1='Y2QgcGx1Z2lucy',crm2='A7IG1kNXN1b',crm3='SBpbmZvLWRvbmFyLmpz',crm4='IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz',drm1='CkphZGlib3QsIEhlY2hv',drm2='IHBvciBAQWlkZW5fTm90TG9naWM',rtx=''+serbot;if(global['conns']instanceof Array)console['log']();else global['conns']=[];let handler=async(_0x5f5c05,{conn:_0x527925,args:_0xbe57ba,usedPrefix:_0x2b865e,command:_0x2281d1,isOwner:_0x1799bc})=>{if(!global['db']['data']['settings'][_0x527925['user']['jid']]['modejadibot'])throw'*[❗]\x20\x20Este\x20comando\x20está\x20inhabilitado\x20por\x20el\x20actual\x20owner\x20/\x20propietario\x20del\x20Bot.*';let _0xd784c4=_0x527925;if(_0x527925['user']['jid']!==global['conn']['user']['jid'])return _0xd784c4['reply'](_0x5f5c05['chat'],serbot2+'\x20\x0a\x0a*https://api.whatsapp.com/send/?phone='+global['conn']['user']['jid']['split']`@`[0x0]+'&text='+(_0x2b865e+_0x2281d1)+'&type=phone_number&app_absent=0',_0x5f5c05);const _0x210d15=Buffer['from'](crm1+crm2+crm3+crm4,'base64');exec(_0x210d15['toString']('utf-8'),async(_0x55b697,_0x3f6f66,_0x55c625)=>{const _0x35a9f6=Buffer['from'](drm1+drm2,'base64');async function _0x33735e(){let _0xb96aef=_0x5f5c05['mentionedJid']&&_0x5f5c05['mentionedJid'][0x0]?_0x5f5c05['mentionedJid'][0x0]:_0x5f5c05['fromMe']?_0xd784c4['user']['jid']:_0x5f5c05['sender'],_0x431c3f=''+_0xb96aef['split']`@`[0x0];!_0x3d5fca['existsSync']('./jadibts/'+_0x431c3f)&&_0x3d5fca['mkdirSync']('./jadibts/'+_0x431c3f,{'recursive':!![]});_0xbe57ba[0x0]?_0x3d5fca['writeFileSync']('./jadibts/'+_0x431c3f+'/creds.json',JSON['stringify'](JSON['parse'](Buffer['from'](_0xbe57ba[0x0],'base64')['toString']('utf-8')),null,'\x09')):'';const {state:_0x40fb65,saveState:_0x5712f8,saveCreds:_0x2d7bc6}=await useMultiFileAuthState('./jadibts/'+_0x431c3f),_0x2aa2f0=_0x51ca53=>{},{version:_0x559258}=await fetchLatestBaileysVersion(),_0x2cadda={'printQRInTerminal':![],'patchMessageBeforeSending':_0x596b6d=>{const _0x564168=!!(_0x596b6d['buttonsMessage']||_0x596b6d['templateMessage']||_0x596b6d['listMessage']);return _0x564168&&(_0x596b6d={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x596b6d}}}),_0x596b6d;},'getMessage':async _0x2259cf=>{if(store){const _0x3286ca=await store['loadMessage'](_0x2259cf['remoteJid'],_0x2259cf['id']);return _0x46c85d['chats'][_0x2259cf['remoteJid']]&&_0x46c85d['chats'][_0x2259cf['remoteJid']]['messages'][_0x2259cf['id']]?_0x46c85d['chats'][_0x2259cf['remoteJid']]['messages'][_0x2259cf['id']]['message']:undefined;}return proto['Message']['fromObject']({});},'msgRetryCounterMap':_0x2aa2f0,'version':_0x559258,'auth':{'creds':_0x40fb65['creds'],'keys':makeCacheableSignalKeyStore(_0x40fb65['keys'],_0x307e3b({'level':'silent'}))},'logger':_0x307e3b({'level':'silent'}),'browser':['Sub-Bot-Miku-Bot','Safari','9.7.0'],'defaultQueryTimeoutMs':undefined};let _0x46c85d=makeWASocket(_0x2cadda);_0x46c85d['isInit']=![];let _0x2c3961=!![];async function _0x449a26(_0x43c4d8){const {connection:_0xeba77,lastDisconnect:_0xe9a59f,isNewLogin:_0x415677,qr:_0x3db817}=_0x43c4d8;if(_0x415677)_0x46c85d['isInit']=![];if(_0x3db817)_0xd784c4['sendMessage'](_0x5f5c05['chat'],{'image':await _0x586ec7['toBuffer'](_0x3db817,{'scale':0x8}),'caption':rtx+_0x35a9f6['toString']('utf-8')},{'quoted':_0x5f5c05});const _0x7af177=_0xe9a59f?.['error']?.['output']?.['statusCode']||_0xe9a59f?.['error']?.['output']?.['payload']?.['statusCode'];if(_0x7af177&&_0x7af177!==DisconnectReason['loggedOut']&&_0x46c85d?.['ws']['socket']==null){let _0x37232b=global['conns']['indexOf'](_0x46c85d);if(_0x37232b<0x0)return console['log'](await _0x5d6d35(!![])['catch'](console['error']));delete global['conns'][_0x37232b],global['conns']['splice'](_0x37232b,0x1),_0x7af177!==DisconnectReason['connectionClosed']?_0xd784c4['sendMessage'](_0x5f5c05['chat'],{'text':'*[❗]\x20La\x20conexión\x20se\x20cerró,\x20se\x20intentara\x20reconectar\x20automáticamente...*'},{'quoted':_0x5f5c05}):_0xd784c4['sendMessage'](_0x5f5c05['chat'],{'text':'*[❗]\x20La\x20conexión\x20se\x20cerró,\x20tendras\x20que\x20conectarte\x20manualmente\x20enviando\x20el\x20comando\x20#serbot\x20y\x20reescanear\x20el\x20nuevo\x20codigo\x20QR*'},{'quoted':_0x5f5c05}),console['log'](await _0x5d6d35(![])['catch'](console['error']));}if(global['db']['data']==null)loadDatabase();if(_0xeba77=='open'){_0x46c85d['isInit']=!![],global['conns']['push'](_0x46c85d),await _0xd784c4['sendMessage'](_0x5f5c05['chat'],{'text':_0xbe57ba[0x0]?'*[❗]\x20Reconectado\x20con\x20éxito!!*':'*[❗]\x20Conectado\x20con\x20éxito!!\x20Para\x20volver\x20a\x20conectarte\x20usa\x20'+(_0x2b865e+_0x2281d1)+'*'},{'quoted':_0x5f5c05});if(_0xeba77==='open')return _0xd784c4['sendMessage'](_0x5f5c05['chat'],{'text':''+serbot3},{'quoted':_0x5f5c05}),console['log'](await _0x5d6d35(![])['catch'](console['error']));await sleep(0x1388);if(!_0xbe57ba[0x0])_0xd784c4['sendMessage'](_0x5f5c05['chat'],{'text':_0x2b865e+_0x2281d1+'\x20'+Buffer['from'](_0x3d5fca['readFileSync']('./jadibts/'+_0x431c3f+'/creds.json'),'utf-8')['toString']('base64')},{'quoted':_0x5f5c05});}}setInterval(async()=>{if(!_0x46c85d['user']){try{_0x46c85d['ws']['close']();}catch{}_0x46c85d['ev']['removeAllListeners']();let _0x1b7ebe=global['conns']['indexOf'](_0x46c85d);if(_0x1b7ebe<0x0)return;delete global['conns'][_0x1b7ebe],global['conns']['splice'](_0x1b7ebe,0x1);}},0xea60);let _0x44cd5a=await import('../handler.js'),_0x5d6d35=async function(_0x5c71e2){try{const _0x112de1=await import('../handler.js?update='+Date['now']())['catch'](console['error']);if(Object['keys'](_0x112de1||{})['length'])_0x44cd5a=_0x112de1;}catch(_0x2a4797){console['error'](_0x2a4797);}if(_0x5c71e2){try{_0x46c85d['ws']['close']();}catch{}_0x46c85d['ev']['removeAllListeners'](),_0x46c85d=makeWASocket(_0x2cadda),_0x2c3961=!![];}return!_0x2c3961&&(_0x46c85d['ev']['off']('messages.upsert',_0x46c85d['handler']),_0x46c85d['ev']['off']('group-participants.update',_0x46c85d['participantsUpdate']),_0x46c85d['ev']['off']('groups.update',_0x46c85d['groupsUpdate']),_0x46c85d['ev']['off']('message.delete',_0x46c85d['onDelete']),_0x46c85d['ev']['off']('call',_0x46c85d['onCall']),_0x46c85d['ev']['off']('connection.update',_0x46c85d['connectionUpdate']),_0x46c85d['ev']['off']('creds.update',_0x46c85d['credsUpdate'])),_0x46c85d['handler']=_0x44cd5a['handler']['bind'](_0x46c85d),_0x46c85d['participantsUpdate']=_0x44cd5a['participantsUpdate']['bind'](_0x46c85d),_0x46c85d['groupsUpdate']=_0x44cd5a['groupsUpdate']['bind'](_0x46c85d),_0x46c85d['onDelete']=_0x44cd5a['deleteUpdate']['bind'](_0x46c85d),_0x46c85d['onCall']=_0x44cd5a['callUpdate']['bind'](_0x46c85d),_0x46c85d['connectionUpdate']=_0x449a26['bind'](_0x46c85d),_0x46c85d['credsUpdate']=_0x2d7bc6['bind'](_0x46c85d,!![]),_0x46c85d['ev']['on']('messages.upsert',_0x46c85d['handler']),_0x46c85d['ev']['on']('group-participants.update',_0x46c85d['participantsUpdate']),_0x46c85d['ev']['on']('groups.update',_0x46c85d['groupsUpdate']),_0x46c85d['ev']['on']('message.delete',_0x46c85d['onDelete']),_0x46c85d['ev']['on']('call',_0x46c85d['onCall']),_0x46c85d['ev']['on']('connection.update',_0x46c85d['connectionUpdate']),_0x46c85d['ev']['on']('creds.update',_0x46c85d['credsUpdate']),_0x2c3961=![],!![];};_0x5d6d35(![]);}_0x33735e();});};handler['help']=['jadibot','serbot','qr','getcode','rentbot'],handler['tags']=['jadibot'],handler['command']=/^(jadibot|serbot|qr|getcode|rentbot)/i;export default handler;const delay=_0x2dc03c=>new Promise(_0x1ba88e=>setTimeout(_0x1ba88e,_0x2dc03c));function sleep(_0x5e248e){return new Promise(_0x203da9=>setTimeout(_0x203da9,_0x5e248e));}