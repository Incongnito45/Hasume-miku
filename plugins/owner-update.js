import{execSync}from'child_process';let handler=async(_0x21321d,{conn:_0xac2ee9,text:_0x2d6111})=>{if(global['conn']['user']['jid']==_0xac2ee9['user']['jid']){let _0x3b368d=execSync('git\x20pull'+(_0x21321d['fromMe']&&_0x2d6111?'\x20'+_0x2d6111:''));_0xac2ee9['reply'](_0x21321d['chat'],_0x3b368d['toString'](),_0x21321d);}};handler['help']=['update'],handler['tags']=['owner'],handler['command']=/^update|actualizar$/i,handler['rowner']=!![];export default handler;