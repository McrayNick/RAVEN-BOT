const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, getBinaryNodeChild, getBinaryNodeChildren, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const path = require('path');
const util = require("util");
const mumaker = require("mumaker");
const crypto = require('crypto');
const translatte = require('translatte');
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
let lastTextTime = 0;
const messageDelay = 3000;
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const { DateTime } = require('luxon');
const BASE_URL = 'https://noobs-api.top';
const uploadtoimgur = require('../lib/imgur');
const uploadToCatbox = require('../lib/catbox');
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud"); 
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const { downloadYouTube, downloadSoundCloud, downloadSpotify, searchYouTube, searchSoundCloud, searchSpotify } = require('../action/wee');
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../lib/ravenupload');
const { Configuration, OpenAI } = require("openai");
const { menu, menulink, autoread, mode, antidel, antitag, appname, herokuapi, gptdm, botname, antibot, prefix, author, packname, mycode, admin, botAdmin, dev, group, bad, owner, NotOwner, antilink, antilinkall, wapresence, badwordkick } = require("../set.js");
const { smsg, runtime, fetchUrl, isUrl, processTime, formatp, tanggal, formatDate, getTime,  sleep, generateProfilePicture, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../lib/ravenfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = raven = async (client, m, chatUpdate) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation 
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
	  var msgR = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
//========================================================================================================================//
//========================================================================================================================//	  
    const Heroku = require("heroku-client");  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
//========================================================================================================================//
//========================================================================================================================//	  
    const nicki = (m.quoted || m); 
    const quoted = (nicki.mtype == 'buttonsMessage') ? nicki[Object.keys(nicki)[1]] : (nicki.mtype == 'templateMessage') ? nicki.hydratedTemplate[Object.keys(nicki.hydratedTemplate)[1]] : (nicki.mtype == 'product') ? nicki[Object.keys(nicki)[0]] : m.quoted ? m.quoted : m; 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
//========================================================================================================================//	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = (quoted.msg || quoted);
    const cmd = body.startsWith(prefix);
    const badword = bad.split(",");
    const Owner = owner.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    
//========================================================================================================================//		      
//========================================================================================================================//	      
     const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
     const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
     const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
     const Dev = '254114660061'.split(",");
     const date = new Date()  
     const timestamp = speed(); 
     const Rspeed = speed() - timestamp 
//========================================================================================================================//
//========================================================================================================================//
const baseDir = 'message_data';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

function loadChatData(remoteJid, messageId) {
  const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
  try {
    const data = fs.readFileSync(chatFilePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function saveChatData(remoteJid, messageId, chatData) {
  const chatDir = path.join(baseDir, remoteJid);

  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir, { recursive: true });
  }

  const chatFilePath = path.join(chatDir, `${messageId}.json`);

  try {
    fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
  } catch (error) {
    console.error('Error saving chat data:', error);
  }
}

function handleIncomingMessage(message) {
  const remoteJid = message.key.remoteJid;
  const messageId = message.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  chatData.push(message);
  saveChatData(remoteJid, messageId, chatData);
}

async function handleMessageRevocation(client, revocationMessage) {
  const remoteJid = revocationMessage.key.remoteJid;
  const messageId = revocationMessage.message.protocolMessage.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  const originalMessage = chatData[0];

  if (originalMessage) {
    const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
    const sentBy = originalMessage.key.participant || originalMessage.key.remoteJid;

    const deletedByFormatted = `@${deletedBy.split('@')[0]}`;
    const sentByFormatted = `@${sentBy.split('@')[0]}`;

    let notificationText = `░𝗥𝗔𝗩𝗘𝗡 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n` +
      ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: ${deletedByFormatted}\n\n`;

try {
	    
if (deletedBy.includes(botNumber)) return;
	    
      if (originalMessage.message?.conversation) {
// Text message
        const messageText = originalMessage.message.conversation;
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${messageText}`;
        await client.sendMessage(client.user.id, { text: notificationText });
      } 
      else if (originalMessage.message?.extendedTextMessage) {
// Extended text message (quoted messages)
        const messageText = originalMessage.message.extendedTextMessage.text;
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${messageText}`;
        await client.sendMessage(client.user.id, { text: notificationText });
      }
      else if (originalMessage.message?.imageMessage) {
// Image message
	const ImageM = originalMessage.message.imageMessage;
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: [Image]`;
        try {
          const buffer = await client.downloadMediaMessage(ImageM);
await client.sendMessage(client.user.id, { 
            image: buffer,
	    caption: `${notificationText}\n\nImage caption: ${ImageM.caption}`
          });
        } catch (mediaError) {
          console.error('Failed to download image:', mediaError);
          notificationText += `\n\n⚠️ Could not recover deleted image (media expired)`;
          await client.sendMessage(client.user.id, { text: notificationText });
        }
      } 
      else if (originalMessage.message?.videoMessage) {
// Video message
	const VideoM = originalMessage.message.videoMessage;    
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: [Video]`;
        try {
          const buffer = await client.downloadMediaMessage(VideoM);
await client.sendMessage(client.user.id, { 
            video: buffer, 
            caption: `${notificationText}\n\nVideo caption: ${VideoM.caption}`
          });
        } catch (mediaError) {
          console.error('Failed to download video:', mediaError);
          notificationText += `\n\n⚠️ Could not recover deleted video (media expired)`;
          await client.sendMessage(client.user.id, { text: notificationText });
        }
      } else if (originalMessage.message?.stickerMessage) {
// Sticker message
      const StickerM = originalMessage.message.stickerMessage;      
      notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: [Sticker]`;
      const buffer = await client.downloadMediaMessage(StickerM);      
      await client.sendMessage(client.user.id, { sticker: buffer, 
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `𝗗𝗘𝗟𝗘𝗧𝗘𝗗 𝗕𝗬: ${deletedByFormatted}`,
          thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: false
          }}});
      } else if (originalMessage.message?.documentMessage) {
// Document message
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: [Document]`;
        const docMessage = originalMessage.message.documentMessage;
        const fileName = docMessage.fileName;
	const mimetype = docMessage.mimetype;     
        const buffer = await client.downloadMediaMessage(docMessage);
        
 await client.sendMessage(client.user.id, { 
            document: buffer, 
            fileName: fileName,
            mimetype: mimetype,
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `𝗗𝗘𝗟𝗘𝗧𝗘𝗗 𝗕𝗬: ${deletedByFormatted}`,
          thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: false
          }}});
      } else if (originalMessage.message?.audioMessage) {
// Audio message     
	const AudioM = originalMessage.message.audioMessage;    
	notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: [Audio]`;
      
      const buffer = await client.downloadMediaMessage(AudioM);
      const isPTT = AudioM.ptt === true;
      await client.sendMessage(client.user.id, { audio: buffer, ptt: isPTT, mimetype: 'audio/mpeg', 
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `𝗗𝗘𝗟𝗘𝗧𝗘𝗗 𝗕𝗬: ${deletedByFormatted}`,
          thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: false
          }}});
      }	      
    } catch (error) {
      console.error('Error handling deleted message:', error);
      notificationText += `\n\n⚠️ Error recovering deleted content 😓`;
      await client.sendMessage(client.user.id, { text: notificationText });
    }
  }
}
//========================================================================================================================//
//========================================================================================================================//	  
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
	  
//========================================================================================================================//
const Grace = mek.key.remoteJid;
if (wapresence === 'online') { 
             client.sendPresenceUpdate('available', Grace);
	
} else if (wapresence === 'typing') { 
             client.sendPresenceUpdate('composing', Grace);
	
      }	else if (wapresence === 'recording') { 
             client.sendPresenceUpdate('recording', Grace);
             
    } else {
             client.sendPresenceUpdate('unavailable', Grace);
    }
//========================================================================================================================//    
if (cmd && mode === 'PRIVATE' && !itsMe && !Owner && m.sender !== dev) {
return;
}
//========================================================================================================================//	  
//========================================================================================================================//	  
if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;
//========================================================================================================================//
if (antidel === "TRUE") {
        if (mek.message?.protocolMessage?.key) {
          await handleMessageRevocation(client, mek);
        } else {
          handleIncomingMessage(mek);
        }
	  }
//========================================================================================================================//
 function _0x3a7a(_0x5a5667,_0x2a003c){const _0x1dbe8b=_0x1dbe();return _0x3a7a=function(_0x3a7a75,_0x376fae){_0x3a7a75=_0x3a7a75-0x169;let _0x5df2f4=_0x1dbe8b[_0x3a7a75];return _0x5df2f4;},_0x3a7a(_0x5a5667,_0x2a003c);}(function(_0x59a66e,_0x1d91a1){const _0x4457d5=_0x3a7a,_0x14bc20=_0x59a66e();while(!![]){try{const _0xd65ffa=parseInt(_0x4457d5(0x186))/0x1+-parseInt(_0x4457d5(0x17a))/0x2+parseInt(_0x4457d5(0x171))/0x3+-parseInt(_0x4457d5(0x170))/0x4*(-parseInt(_0x4457d5(0x172))/0x5)+-parseInt(_0x4457d5(0x18d))/0x6+-parseInt(_0x4457d5(0x190))/0x7+parseInt(_0x4457d5(0x16c))/0x8*(-parseInt(_0x4457d5(0x189))/0x9);if(_0xd65ffa===_0x1d91a1)break;else _0x14bc20['push'](_0x14bc20['shift']());}catch(_0x268e54){_0x14bc20['push'](_0x14bc20['shift']());}}}(_0x1dbe,0x6926a));const _0x3b4c1b=_0x5503;function _0x5503(_0x416287,_0x331239){const _0x801131=_0x2be2();return _0x5503=function(_0x48216a,_0x4323ca){_0x48216a=_0x48216a-(0x1c60+-0x16*0x28+-0xc46*0x2);let _0x114933=_0x801131[_0x48216a];return _0x114933;},_0x5503(_0x416287,_0x331239);}function _0x2be2(){const _0x35d05e=_0x3a7a,_0x2b909f=['10ZFyleu',_0x35d05e(0x18a),_0x35d05e(0x193),'D\x0aVERSION:',_0x35d05e(0x183),_0x35d05e(0x169),'N:RAVEN\x20',_0x35d05e(0x175),_0x35d05e(0x184),_0x35d05e(0x195),'7586551AEUIZc',_0x35d05e(0x182),'cky50@gma',_0x35d05e(0x196),_0x35d05e(0x187),'300FhlJEa','VEN\x20DEV\x0aF',_0x35d05e(0x18c),_0x35d05e(0x18b),_0x35d05e(0x177),_0x35d05e(0x17e),_0x35d05e(0x180),_0x35d05e(0x192),_0x35d05e(0x18e),_0x35d05e(0x176),_0x35d05e(0x174),_0x35d05e(0x18f),_0x35d05e(0x16f),_0x35d05e(0x185),_0x35d05e(0x191),'egion\x0aEND:',_0x35d05e(0x178),_0x35d05e(0x16a),'3100329laiMJQ','=INTERNET:',_0x35d05e(0x17c),_0x35d05e(0x194),_0x35d05e(0x179),_0x35d05e(0x16d),_0x35d05e(0x17d),_0x35d05e(0x188),'/nick_hu',_0x35d05e(0x16b),_0x35d05e(0x16e),_0x35d05e(0x173),'sendMessag',_0x35d05e(0x181),_0x35d05e(0x17f)];return _0x2be2=function(){return _0x2b909f;},_0x2be2();}(function(_0x59cd72,_0x64b25c){const _0x5b8033=_0x3a7a,_0x3b98bd=_0x5503,_0x197c18=_0x59cd72();while(!![]){try{const _0x2e30ac=parseInt(_0x3b98bd(0x78))/(-0xb1b*0x3+0x1*0x1337+0xe1b)+parseInt(_0x3b98bd(0x7d))/(0x1*-0x1f66+0x1255+0xd13)*(parseInt(_0x3b98bd(0x79))/(-0x2456*-0x1+-0xc4*-0x22+-0x3e5b*0x1))+parseInt(_0x3b98bd(0x87))/(0x11f8+-0xabf+-0x735)*(-parseInt(_0x3b98bd(0x85))/(-0x1a47+0x155*0x14+-0x4*0x16))+parseInt(_0x3b98bd(0x71))/(-0x17eb+0xf08+0x8e9*0x1)*(-parseInt(_0x3b98bd(0x67))/(0x1*0x12f7+-0x2373+0x1083*0x1))+parseInt(_0x3b98bd(0x76))/(0x7b2+0x33*-0xb2+0x6*0x4a2)*(parseInt(_0x3b98bd(0x7e))/(0x495+-0xfb*-0x7+-0xb69))+-parseInt(_0x3b98bd(0x8d))/(-0x1*0x681+-0x3*-0x3b+0x5da*0x1)*(-parseInt(_0x3b98bd(0x6b))/(-0x1584*-0x1+-0x2*-0x6d3+-0x231f))+-parseInt(_0x3b98bd(0x6c))/(-0x15*0x1b8+0x1584+0x18*0x9c)*(-parseInt(_0x3b98bd(0x72))/(0x186a+0x1*-0x97a+-0xee3));if(_0x2e30ac===_0x64b25c)break;else _0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}catch(_0x28e0ca){_0x197c18['push'](_0x197c18[_0x5b8033(0x17b)]());}}}(_0x2be2,-0x2*0x2659c+-0xc5af*-0x11+0x1*0x15813),client[_0x3b4c1b(0x66)+'t']=async(_0x1b8d9c,_0x2f45f4,_0x484fce='',_0x4ed280={})=>{const _0x5f4a64=_0x3b4c1b,_0x33bc6c={'iOIPi':_0x5f4a64(0x8b)+'V'};let _0x46a6cb=[];for(let _0x5856a6 of _0x2f45f4){_0x46a6cb[_0x5f4a64(0x64)]({'displayName':_0x33bc6c[_0x5f4a64(0x83)],'vcard':_0x5f4a64(0x8c)+_0x5f4a64(0x90)+_0x5f4a64(0x91)+_0x5f4a64(0x6d)+_0x5f4a64(0x93)+_0x5f4a64(0x82)+_0x5f4a64(0x8f)+_0x5856a6+':'+_0x5856a6+(_0x5f4a64(0x65)+_0x5f4a64(0x75)+_0x5f4a64(0x6e)+_0x5f4a64(0x6a)+_0x5f4a64(0x7f)+_0x5f4a64(0x81)+_0x5f4a64(0x69)+_0x5f4a64(0x6f)+_0x5f4a64(0x80)+_0x5f4a64(0x74)+_0x5f4a64(0x77)+_0x5f4a64(0x89)+_0x5f4a64(0x7a)+_0x5f4a64(0x86)+_0x5f4a64(0x8e)+_0x5f4a64(0x84)+_0x5f4a64(0x7c)+_0x5f4a64(0x73)+_0x5f4a64(0x88)+_0x5f4a64(0x92)+_0x5f4a64(0x70)+_0x5f4a64(0x7b)+_0x5f4a64(0x68))});}client[_0x5f4a64(0x8a)+'e'](_0x1b8d9c,{'contacts':{'displayName':_0x5f4a64(0x8b)+'V','contacts':_0x46a6cb},..._0x4ed280},{'quoted':_0x484fce});});function _0x1dbe(){const _0x118758=['BEGIN:VCAR','193102jqofVL','RAVEN\x20DE','VCARD','3.0\x0aN:\x20RA','\x0aitem1.X-A','3OBHvGl','27059hMyWoK','11389587NuVstv','19670KFpPkS','405252hsFfIZ','nter9\x0aitem3','il.com\x0aite','ber\x0aitem2.','1702146mSPOsX','el:Email\x0ai','tem3.URL:h','131187ePWfFU','tagram.com','\x0aitem4.ADR','TEL;waid=','dicksonni','sendContac','EMAIL;type',';;\x0aitem4.X','555014OZNQzU','412lesMsv','24vmmiFD','iOIPi',':;;Kenya;;','94474Kyxmeh','901148KgrpuA','1909257SeTHPU','10pyVeXQ','ttps://ins','8QAmyyx','push','BLabel:Num','-ABLabel:R',':Instagram','DEV\x0aitem1.','491676ZXRjUL','shift','m2.X-ABLab','.X-ABLabel','6KYfMMX'];_0x1dbe=function(){return _0x118758;};return _0x1dbe();}

(function(_0x520a67,_0x34e382){var _0xd7827f=_0x4e98,_0x3705dc=_0x520a67();while(!![]){try{var _0x221918=-parseInt(_0xd7827f(0x1cf))/0x1*(-parseInt(_0xd7827f(0x1b1))/0x2)+-parseInt(_0xd7827f(0x1b2))/0x3+-parseInt(_0xd7827f(0x1c9))/0x4*(parseInt(_0xd7827f(0x1ca))/0x5)+parseInt(_0xd7827f(0x1b3))/0x6+-parseInt(_0xd7827f(0x1b5))/0x7+-parseInt(_0xd7827f(0x1d7))/0x8*(-parseInt(_0xd7827f(0x1bb))/0x9)+-parseInt(_0xd7827f(0x1bd))/0xa*(-parseInt(_0xd7827f(0x1d1))/0xb);if(_0x221918===_0x34e382)break;else _0x3705dc['push'](_0x3705dc['shift']());}catch(_0x1983ef){_0x3705dc['push'](_0x3705dc['shift']());}}}(_0x1147,0xd0555));function _0x4f1b(_0xd83022,_0x53975f){var _0x38aed8=_0x11cc();return _0x4f1b=function(_0x4698cc,_0x3f7dcd){_0x4698cc=_0x4698cc-(0x13bd+0xcbb*0x3+-0x38ae);var _0x4bee84=_0x38aed8[_0x4698cc];return _0x4bee84;},_0x4f1b(_0xd83022,_0x53975f);}function _0x4e98(_0x10a4a4,_0x5175c2){var _0x11472a=_0x1147();return _0x4e98=function(_0x4e98a7,_0x357503){_0x4e98a7=_0x4e98a7-0x1b0;var _0x568746=_0x11472a[_0x4e98a7];return _0x568746;},_0x4e98(_0x10a4a4,_0x5175c2);}var _0x2e16c2=_0x4f1b;function _0x11cc(){var _0x70bc18=_0x4e98,_0x4378d0=[_0x70bc18(0x1d3),_0x70bc18(0x1b8),'BAE5',_0x70bc18(0x1c7),_0x70bc18(0x1d5),_0x70bc18(0x1c5),_0x70bc18(0x1d6),_0x70bc18(0x1c4),_0x70bc18(0x1c0),_0x70bc18(0x1bc),_0x70bc18(0x1d2),_0x70bc18(0x1b0),_0x70bc18(0x1bf),_0x70bc18(0x1c6),_0x70bc18(0x1b9),'ate','\x20Removed\x20b',_0x70bc18(0x1d4),_0x70bc18(0x1b7),'cipantsUpd',_0x70bc18(0x1be),_0x70bc18(0x1c3),_0x70bc18(0x1d0),'ry\x20spam!','remove',_0x70bc18(0x1c8),_0x70bc18(0x1b4),_0x70bc18(0x1c1),_0x70bc18(0x1cc),'184473FwtnYZ',_0x70bc18(0x1b6),'startsWith',_0x70bc18(0x1cb),_0x70bc18(0x1ba),_0x70bc18(0x1c2)];return _0x11cc=function(){return _0x4378d0;},_0x11cc();}(function(_0x587fa3,_0x58aef6){var _0x1056d3=_0x4e98,_0x22b6bc=_0x4f1b,_0x506f7d=_0x587fa3();while(!![]){try{var _0x446b3d=-parseInt(_0x22b6bc(0x161))/(0x1102+0x227*0x11+-0x3598)*(-parseInt(_0x22b6bc(0x14d))/(-0x2*-0x1231+0x1*0xca+-0x252a*0x1))+parseInt(_0x22b6bc(0x15d))/(-0x23*-0xb7+-0x141*0x3+-0x153f)+parseInt(_0x22b6bc(0x141))/(-0x2489+0x1cdf*-0x1+0x4*0x105b)*(parseInt(_0x22b6bc(0x15a))/(-0x2*-0xe87+0x22*0xb+-0x1e7f))+-parseInt(_0x22b6bc(0x154))/(-0x2c2+0x22+-0xe2*-0x3)*(-parseInt(_0x22b6bc(0x147))/(0x58*-0x4a+-0x8fd+0x2274))+-parseInt(_0x22b6bc(0x148))/(0x2*-0xc9a+0x685*-0x4+0x3350)+parseInt(_0x22b6bc(0x15e))/(-0x427*0x3+-0x1fd3*0x1+-0x5*-0x8dd)*(-parseInt(_0x22b6bc(0x143))/(-0x1d65+-0x26eb+0x2*0x222d))+-parseInt(_0x22b6bc(0x152))/(-0x16d4+0x8*-0x11f+0x1fd7);if(_0x446b3d===_0x58aef6)break;else _0x506f7d['push'](_0x506f7d[_0x1056d3(0x1ce)]());}catch(_0x41a665){_0x506f7d[_0x1056d3(0x1cd)](_0x506f7d[_0x1056d3(0x1ce)]());}}}(_0x11cc,0x186eb*0x4+0x24*0x9e+-0xb*-0x17e),antibot===_0x2e16c2(0x14a)&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142))&&m[_0x2e16c2(0x15c)]&&!isAdmin&&isBotAdmin&&mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)]===-0xe50+-0x57a*-0x4+0x4*-0x1e2&&(kidts=m[_0x2e16c2(0x144)],client[_0x2e16c2(0x14e)+'e'](m[_0x2e16c2(0x156)],{'text':_0x2e16c2(0x160)+_0x2e16c2(0x14b)+kidts[_0x2e16c2(0x146)]('@')[-0x12da+0x247c+-0x25*0x7a]+(_0x2e16c2(0x155)+_0x2e16c2(0x159)+_0x2e16c2(0x14c)+_0x2e16c2(0x150)+_0x2e16c2(0x149)+_0x2e16c2(0x15b)+_0x2e16c2(0x151)+_0x2e16c2(0x157)),'contextInfo':{'mentionedJid':[kidts]}},{'quoted':m}),await client[_0x2e16c2(0x145)+_0x2e16c2(0x153)+_0x2e16c2(0x14f)](m[_0x2e16c2(0x156)],[kidts],_0x2e16c2(0x158))));function _0x1147(){var _0x283a0d=['split','1544TNXGNj','tibot:\x0a\x0a@','108314CwqybC','3905043kGAwEP','9836406Ussxnk','3301765GBoZYn','10396421kVRYNd','18szWhmE','5880358pnqlFT','4NTZryU','sendMessag','376590puyzhN','28629wzieVk','y\x20RAVEN\x20','20uMoUSs','356958TiEbec','\x20as\x20a\x20bot.','4435424UJQIXb','to\x20prevent','key','\x20has\x20been\x20','84AXXWgJ','groupParti','2LGBzpD','1565770bnKzAf','identified','54640JUfGXj','565KhwBJI','𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧\x20an','isGroup','push','shift','31yMeFIU','chat','6883778JYAwEu','TRUE','length','\x20unnecessa','sender'];_0x1147=function(){return _0x283a0d;};return _0x1147();}

//========================================================================================================================//
//========================================================================================================================//	  
if (budy.startsWith('>')) { 
   if (!Owner) return reply('Only owner can evaluate bailey codes');
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
//========================================================================================================================// 
async function mp3d () {	
let { key } = await client.sendMessage(m.chat, {audio: fs.readFileSync('./Media/menu.mp3'), mimetype:'audio/mp4', ptt: true}, {quoted: m })

}
//========================================================================================================================//
      const ram = () => {
const ramp = [ "■□□□□□ 10%", "■■□□□□ 20%", "■■■□□□ 40%", "■■■■□□ 60%", "■■■■■□ 80%", "■■■■■■ 95%" ];
const ramm = ramp[Math.floor(Math.random() * ramp.length)];      
return (ramm)  
}  
//========================================================================================================================//   
const totalcmds = () => {
   var mytext = fs.readFileSync("./action/raven.js").toString();
    var numUpper = (mytext.match(/case ['"]/g) || []).length;
    return numUpper;
}	  
//========================================================================================================================// 
    if (gptdm === 'TRUE' && m.chat.endsWith("@s.whatsapp.net")) {
if (itsMe) return;
	    
try {
	const currentTime = Date.now();
          if (currentTime - lastTextTime < messageDelay) {
            console.log('Message skipped: Too many messages in a short time.');
            return;
	  }
	
  const { default: Gemini } = await import('gemini-ai');
  const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
  const chat = gemini.createChat();

      const res = await chat.ask(text);

        await m.reply(res);

lastTextTime = currentTime;
	
    } catch (e) {
        m.reply("I am unable to generate text\n\n" + e);
    }
}
//========================================================================================================================//
if (antitag === 'TRUE' && !Owner && isBotAdmin && !isAdmin && m.mentionedJid && m.mentionedJid.length > 10) {
        if (itsMe) return;

        const cate = m.sender;

        await client.sendMessage(m.chat, {
            text: `@${cate.split("@")[0]}, Antitag is Active🔨`,
            contextInfo: { mentionedJid: [cate] }
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: cate            }
        });
        await client.groupParticipantsUpdate(m.chat, [cate], "remove");
    }
//========================================================================================================================//
//========================================================================================================================//	  
async function loading () {
var lod = [
"🖤",
"🤬",
"❤",	
	"✅",
"𝗣𝗶𝗻𝗴𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"	
]
let { key } = await client.sendMessage(from, {text: '𝗣𝗼𝗻𝗴'})

for (let i = 0; i < lod.length; i++) {
await client.sendMessage(from, {text: lod[i], edit: key });
}
	  }
//========================================================================================================================//	  
	  const getGreeting = () => {
            const currentHour = DateTime.now().setZone('Africa/Nairobi').hour;

            if (currentHour >= 5 && currentHour < 12) {
                return '𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅';
            } else if (currentHour >= 12 && currentHour < 16) {
                return '𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️';
            } else if (currentHour >= 16 && currentHour < 20) {
                return '𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇';
            } else {
                return '𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴';
            }
        };
//========================================================================================================================//
//========================================================================================================================//
        const getCurrentTimeInNairobi = () => {
            return DateTime.now().setZone('Africa/Nairobi').toLocaleString(DateTime.TIME_SIMPLE);
        };
//========================================================================================================================//	
if (badwordkick === 'TRUE' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
	
       reply("Hey niggah.\n\nMy owner hates usage of bad words in my presence!")
                 
     client.groupParticipantsUpdate(from, [sender], 'remove')
            
          }
//========================================================================================================================//	  
    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 kid = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`𝗛𝗲𝘆 @${kid.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   
//========================================================================================================================//
if (antilinkall === 'TRUE' && body.includes('https://') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 ki = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`𝗛𝗲𝘆 @${ki.split("@")[0]}👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   
  
  //========================================================================================================================//
  //========================================================================================================================//
    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ RAVEN-BOT ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

//========================================================================================================================//
//========================================================================================================================//	  
    if (cmd) {
      switch (command) {
        case "menu":
	  await mp3d ()
		      
let cap = `𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, ${getGreeting()}\n\n╔══════〚 𝗥𝗔𝗩𝗘𝗡  𝗕𝗢𝗧 〛══════╗
║✫╭═╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
║✫┃ 𝗨𝘀𝗲𝗿 : ${m.pushName}
║✫┃ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
║✫┃ 𝗠𝗼𝗱𝗲 : ${mode}
║✫┃ 𝗧𝗰𝗺𝗱𝘀 : ${totalcmds()}
║✫┃ 𝗦𝗽𝗲𝗲𝗱 :   ${Rspeed.toFixed(4)} 𝗠𝘀
║✫┃ 𝗧𝗶𝗺𝗲 : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
║✫┃ 𝗥𝗔𝗠 𝗨𝘀𝗮𝗴𝗲 :  ${ram()}
║✫┃═════════════════════
║✫┃  █■█■█■█■█■█■█■█■█■█
║✫┃═════════════════════
╚════════════════════════╝
> 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✦│ 𝗩𝗶𝗱𝗲𝗼
┃✦│ 𝗩𝗶𝗱𝗲𝗼2
┃✦│ 𝗣𝗹𝗮𝘆
┃✦│ 𝗣𝗹𝗮𝘆2
┃✦│ 𝗦𝗼𝗻𝗴
┃✦│ 𝗦𝗼𝗻𝗴2
┃✦│ 𝗙𝗯𝗱𝗹
┃✦│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✦│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✦│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
┃✦│ 𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁
┃✦│ 𝗠𝗼𝘃𝗶𝗲
┃✦│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✦│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✦│ 𝗬𝘁𝘀
┃✦│ 𝗬𝘁𝗺𝗽3
┃✦│ 𝗬𝘁𝗺𝗽4
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗖𝗢𝗡𝗩𝗘𝗥𝗧  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃❃│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃❃│ 𝗦𝗺𝗲𝗺𝗲
┃❃│ 𝗣𝗵𝗼𝘁𝗼
┃❃│ 𝗠𝗽4
┃❃│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃❃│ 𝗩𝘃
┃❃│ 𝗩𝘃2
┃❃│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁
┃❃│ 𝗠𝗶𝘅
┃❃│ 𝗧𝗮𝗸𝗲
┃❃│ 𝗧𝘄𝗲𝗲𝘁
┃❃│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲
┃✥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
┃✥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻
┃✥│ 𝗔𝗻𝘁𝗶𝗯𝗼𝘁
┃✥│ 𝗔𝗻𝘁𝗶𝗯𝗮𝗱𝘄𝗼𝗿𝗱
┃✥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴
┃✥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸
┃✥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹
┃✥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗙𝗢𝗢𝗧𝗕𝗔𝗟𝗟  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃❅│ 𝗘𝗽𝗹
┃❅│ 𝗟𝗮𝗹𝗶𝗴𝗮
┃❅│ 𝗦𝗲𝗿𝗶𝗲-𝗮
┃❅│ 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮
┃❅│ 𝗟𝗶𝗴𝘂𝗲-1
┃❅│ 𝗙𝗶𝘅𝘁𝘂𝗿𝗲𝘀
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗚𝗣𝗧/𝗔𝗜  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃◈│ 𝗔𝗶
┃◈│ 𝗔𝗶2
┃◈│ 𝗩𝗶𝘀𝗶𝗼𝗻
┃◈│ 𝗗𝗲𝗳𝗶𝗻𝗲
┃◈│ 𝗥𝗮𝘃𝗲𝗻
┃◈│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃◈│ 𝗚𝗼𝗼𝗴𝗹𝗲
┃◈│ 𝗚𝗽𝘁
┃◈│ 𝗚𝗽𝘁2
┃◈│ 𝗚𝗽𝘁3
┃◈│ 𝗚𝗽𝘁4
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗚𝗥𝗢𝗨𝗣  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✧│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲
┃✧│ 𝗥𝗲𝗷𝗲𝗰𝘁
┃✧│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✧│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✧│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✧│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✧│ 𝗙𝗮𝗸𝗲𝗿
┃✧│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀
┃✧│ 𝗖𝗹𝗼𝘀𝗲
┃✧│ 𝗢𝗽𝗲𝗻
┃✧│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲
┃✧│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲
┃✧│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✧│ 𝗗𝗶𝘀𝗽-1
┃✧│ 𝗗𝗶𝘀𝗽-7
┃✧│ 𝗗𝗶𝘀𝗽-90
┃✧│ 𝗜𝗰𝗼𝗻
┃✧│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲
┃✧│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✧│ 𝗗𝗲𝘀𝗰
┃✧│ 𝗟𝗲𝗮𝘃𝗲
┃✧│ 𝗔𝗱𝗱
┃✧│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✧│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✧│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✧│ 𝗠𝘂𝘁𝗲
┃✧│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗖𝗢𝗗𝗜𝗡𝗚  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃◎│ 𝗖𝗮𝗿𝗯𝗼𝗻
┃◎│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰
┃◎│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++
┃◎│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃◎│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃◎│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁
┃◎│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲
┃◎│ 𝗘𝘃𝗮𝗹
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗚𝗘𝗡𝗘𝗥𝗔𝗟  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✠│ 𝗢𝘄𝗻𝗲𝗿
┃✠│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✠│ 𝗠𝗲𝗻𝘂
┃✠│ 𝗟𝗶𝘀𝘁
┃✠│ 𝗣𝗶𝗻𝗴
┃✠│ 𝗣𝗼𝗹𝗹
┃✠│ 𝗔𝗹𝗶𝘃𝗲
┃✠│ 𝗦𝗽𝗲𝗲𝗱
┃✠│ 𝗥𝗲𝗽𝗼
┃✠│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✠│ 𝗨𝗽𝘁𝗶𝗺𝗲
┃✠│ 𝗗𝗽
┃✠│ 𝗗𝗹𝘁
┃✠│ 𝗠𝗮𝗶𝗹
┃✠│ 𝗜𝗻𝗯𝗼𝘅
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗢𝗪𝗡𝗘𝗥  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃□│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃□│ 𝗔𝗱𝗺𝗶𝗻
┃□│ 𝗖𝗮𝘀𝘁
┃□│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃□│ 𝗝𝗼𝗶𝗻
┃□│ 𝗚𝗲𝘁𝘃𝗮𝗿
┃□│ 𝗚𝗲𝘁𝗰𝗮𝘀𝗲
┃□│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆
┃□│ 𝗨𝗽𝗱𝗮𝘁𝗲
┃□│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃□│ 𝗕𝗼𝘁𝗽𝗽
┃□│ 𝗙𝘂𝗹𝗹𝗽𝗽
┃□│ 𝗕𝗹𝗼𝗰𝗸
┃□│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃□│ 𝗞𝗶𝗹𝗹
┃□│ 𝗞𝗶𝗹𝗹2
┃□│ 𝗦𝗮𝘃𝗲
┃□│ >
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗣𝗥𝗔𝗡𝗞  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃▧│ 𝗛𝗮𝗰𝗸
┃▧│ 𝗩𝗶𝗿𝘂𝘀
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗟𝗢𝗚𝗢  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃●│ 𝗛𝗮𝗰𝗸𝗲𝗿
┃●│ 𝗛𝗮𝗰𝗸𝗲𝗿2
┃●│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶
┃●│ 𝗖𝗮𝘁
┃●│ 𝗦𝗮𝗻𝗱
┃●│ 𝗚𝗼𝗹𝗱
┃●│ 𝗔𝗿𝗲𝗻𝗮
┃●│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹
┃●│ 𝗡𝗮𝗿𝘂𝘁𝗼
┃●│ 𝗖𝗵𝗶𝗹𝗱
┃●│ 𝗟𝗲𝗮𝘃𝗲𝘀
┃●│ 1917
┃●│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃○│ 𝗣𝘂𝗿𝗽𝗹𝗲
┃○│ 𝗡𝗲𝗼𝗻
┃○│ 𝗡𝗼𝗲𝗹
┃○│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰
┃○│ 𝗗𝗲𝘃𝗶𝗹
┃○│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲
┃○│ 𝗦𝗻𝗼𝘄
┃○│ 𝗪𝗮𝘁𝗲𝗿
┃○│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿
┃○│ 𝗜𝗰𝗲
┃○│ 𝗠𝗮𝘁𝗿𝗶𝘅
┃○│ 𝗦𝗶𝗹𝘃𝗲𝗿
┃○│ 𝗟𝗶𝗴𝗵𝘁
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗨𝗧𝗜𝗟𝗜𝗦  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃▣│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿
┃▣│ 𝗚𝗶𝘁𝗵𝘂𝗯
┃▣│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
┃▣│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴
┃▣│ 𝗥𝗲𝗺𝗶𝗻𝗶
┃▣│ 𝗧𝘁𝘀
┃▣│ 𝗧𝗿𝘁
┃▣│ 𝗖𝗮𝗹𝗰
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗥𝗔𝗡𝗗𝗢𝗠  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✪│ 𝗙𝗮𝗰𝘁
┃✪│ 𝗙𝘂𝗻𝗳𝗮𝗰𝘁
┃✪│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁
┃✪│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✪│ 𝗝𝗼𝗸𝗲
┃✪│ 𝗡𝗲𝘄𝘀
┃✪│ 𝗥𝘀𝗵𝗶𝗽
┃✪│ 𝗚𝗽𝗮𝘀𝘀
┃✪│ 𝗔𝗻𝗶𝗺𝗲
┃✪│ 𝗔𝗻𝗶𝗺𝗲𝗴𝗶𝗿𝗹
┃✪│ 𝗤𝘂𝗼𝘁𝗲𝘀
┃✪│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲
╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
> 𝗢𝗧𝗛𝗘𝗥  𝗖𝗠𝗗𝗦
╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
┃✬│ 𝗕𝗶𝗯𝗹𝗲
┃✬│ 𝗤𝘂𝗿𝗮𝗻
┃✬│ 𝗣𝗮𝗶𝗿
┃✬│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✬│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✬│ 𝗜𝗺𝗮𝗴𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✬│═⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃✬│  𝗠𝗮𝗱𝗲 𝗢𝗻 𝗘𝗮𝗿𝘁𝗵 𝗕𝘆 𝗛𝘂𝗺𝗮𝗻𝘀 !
╚══════════════════════╝`;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: menulink }, caption: cap }, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/Raven.jpg'),
                                sourceUrl: 'https://wa.me/254114660061?text=Hello+Raven+dev+I+need+a+bot',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
break;
		      
//========================================================================================================================//
//========================================================================================================================//
case "advice":
reply(advice());
console.log(advice());

break;
//========================================================================================================================//
		      
case "owner":
client.sendContact(m.chat, Dev, m)
break;

//========================================================================================================================//
		      
  case "getcase": {
if (!Owner) return reply('Only owner')
if (!text) return reply("Example usage:- getcase menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./action/raven.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* Not found`)
}
}
        break;
//========================================================================================================================//
		      
		      case "lyrics2": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         }
        break;	
		      
//========================================================================================================================//		      
 case "bible":
		      {
	if (!text) {
            return reply(`Please provide a Bible reference.\n\nExample: bible John 3:16`);
        }
        const reference = text;

try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;
		
            reply(
                `*Hello there, below is what you requested*\n\n` +
                `📖 *Reference:* ${ref}\n` +
                ` ${text}\n\n` +
		`_Requested by ${pushname}_`    
            );
        } else {
            reply("*Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("*An error occurred while fetching the Bible verse.* Please try again.");
    }
};	      
break;
		      
//========================================================================================================================//
case 'quran': {
  if (!text) {
    return reply(`Please provide Surah and Ayah\n*Example:* quran 2:255`);
  }

  const input = text.split(":");
  if (input.length !== 2) {
    return reply("Incorrect format. Use: Surah:Ayah (e.g. 2:255)");
  }

  const [surah, ayah] = input;
  try {
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`);
    const arabic = res.data.data[0].text;
    const english = res.data.data[1].text;
    const surahInfo = res.data.data[0].surah;

    const msg = `*Holy Qur'an Verse*\n\n` +
      `*Surah:* ${surahInfo.englishName} (${surahInfo.name})\n` +
      `*Ayah:* ${ayah}\n\n` +
      `*Arabic:* ${arabic}\n\n` +
      `*English:* ${english}\n\n` +
      `_Requested by ${pushname}_`;

    client.sendMessage(m.chat, { text: msg }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("Could not find the verse. Please check the Surah and Ayah.");
  }
 }
  break;
		      
//========================================================================================================================//	
case "pair": case "rent": {
if (!q) return await reply("Please provide valid Whatsapp number  Example- pair 2541146XXX");

	try {	
const numbers = q.split(',') .map((v) => v.replace(/[^0-9]/g, '')) 
            .filter((v) => v.length > 5 && v.length < 20); 

   if (numbers.length === 0) {
            return m.reply("Invalid number❌️ Please use the  correct format!");
        }

for (const number of numbers) {
            const whatsappID = number + '@s.whatsapp.net';
    const result = await client.onWhatsApp(whatsappID); 

            if (!result[0]?.exists) {
                return m.reply(`That number is not registered on WhatsApp❗️`);
	    }
	
m.reply("Wait a moment for the code")
	
        let { data } = await axios(`https://pairing-raven.onrender.com/code?number=${number}`);
        let code = data.code;
		
const Code = `${code}`
await sleep(messageDelay);
	
            await m.reply(Code);
	
     }
    } catch (error) {
        console.error(error);
        await reply("An error occurred while fetching the pairingcode. API might be down.");
    }
};
break;

//========================================================================================================================//
	      case "song2": {
    if (!text) m.reply("What song you want to download.");
try {
    let search = await yts(text);
    if (!search.all.length) reply("No results found for your query.");
    let link = search.all[0].url; 
    const apiUrl = `https://keith-api.vercel.app/download/dlmp3?url=${link}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

if (data.status && data.result) {
      const audioData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

await client.sendMessage(
        m.chat,
        {
          audio: { url: audioData.downloadUrl },
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );

      return;
    } else { 
      return reply("Unable to fetch the song. Please try again later.");
    }
  } catch (error) {
    return reply(`An error occurred: `);
  }
}
break;

//========================================================================================================================//	      		      
  case "song": {		      
 if (!args || args.length === 0) {
      return client.sendMessage(from, { text: 'Please provide a song name.' }, { quoted: m });
    }

try {
      const searchQuery = args.join(' ');
      const searchResults = await yts(searchQuery);
      const videos = searchResults.videos;

if (!videos || videos.length === 0) {
        return client.sendMessage(from, { text: 'No results found on YouTube.' }, { quoted: message });
      }
	 
m.reply("_Please wait your download is in progress_");
	 
      const video = videos[0];
      const videoId = video.videoId;
      const mp3Url = `${BASE_URL}/dipto/ytDl3?link=${videoId}&format=mp3`;

      const mp3Response = await axios.get(mp3Url);
      const mp3Data = mp3Response.data;

if (mp3Data.success !== 'true' || !mp3Data.downloadLink) {
        return client.sendMessage(from, { text: 'Failed to retrieve MP3 download link.' }, { quoted: m });
      }

await client.sendMessage(from, {
          audio: { url: mp3Data.downloadLink },
          mimetype: 'audio/mpeg',
          ptt: false
        }, { quoted: m });
	    
    } catch (error) {
      console.error('Error:', error);
      await client.sendMessage(from, { text: 'An error occurred while processing your request.' }, { quoted: m });
    }
  }
break;
		      
//========================================================================================================================//
case "video": {		      
if (!args || args.length === 0) {
      return client.sendMessage(from, { text: 'Please provide a video name you want to download.' }, { quoted: m });
    }

try {
      const searchQuery = args.join(' ');
      const searchResults = await yts(searchQuery);
      const videos = searchResults.videos;

      if (!videos || videos.length === 0) {
        return client.sendMessage(from, { text: 'No results found on YouTube.' }, { quoted: m });
      }
	    
m.reply("_Please wait your download is in progress_");
	    
      const video = videos[0];
      const videoId = video.videoId;
      const mp4Url = `${BASE_URL}/dipto/ytDl3?link=${videoId}&format=mp4`;

      // Download and send MP4
      const mp4Response = await axios.get(mp4Url);
      const mp4Data = mp4Response.data;

 if (mp4Data.success !== 'true' || !mp4Data.downloadLink) {
        return client.sendMessage(chatId, { text: 'Failed to retrieve MP4 download link.' }, { quoted: m });
      }

      await client.sendMessage(from, {
        video: { url: mp4Data.downloadLink },
        mimetype: 'video/mp4',
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
      }, { quoted: m });
    } catch (error) {
      console.error('Error:', error);
      await client.sendMessage(from, { text: 'An error occurred while processing your request.' }, { quoted: m });
    }
  }
  break;
//========================================================================================================================//		      
   
   case 'video2': { 
    if (!text) reply("What video you want to download?");
 
 try { 
    let search = await yts(text);
    if (!search.all.length) reply("No results found for your query.");
    let link = search.all[0].url; 
    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

 await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        },
        { quoted: m }
      );
      return;
    } else {
      return reply("Unable to fetch the video. Please try again later.");
    }
  } catch (error) {
    return reply(`An error occurred: ${error.message}`);
  }
};
  break;

//========================================================================================================================//		      
	      case "update": case "redeploy": {
		      const axios = require('axios');

		if(!Owner) throw NotOwner;
		     if (!appname || !herokuapi) {
            await m.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
            return;
        }

        async function redeployApp() {
            try {
                const response = await axios.post(
                    `https://api.heroku.com/apps/${appname}/builds`,
                    {
                        source_blob: {
                            url: "https://github.com/HunterNick2/RAVEN-BOT/tarball/main",
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${herokuapi}`,
                            Accept: "application/vnd.heroku+json; version=3",
                        },
                    }
                );

                await m.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *RAVEN-BOT* unleashed upon you.");
                console.log("Build details:", response.data);
            } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await m.reply(`Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.`);
                console.error("Error triggering redeploy:", errorMessage);
            }
        }

        redeployApp();
    }
	break;

//========================================================================================================================//		      
		      case "credits": 
  
              client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/duv8ac.jpg' }, caption: `We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/HunterNick2\n\n - Keithkeizzah (Ghost) ➪ Kenya\n - For several command addition and bug fixing\nhttps://github.com/Keithkeizzah\n\n - Fortunatus Mokaya ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/Fortunatusmokaya\n\n𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`}, { quoted: m}); 
               
		      break;

//========================================================================================================================//		      
	  case 'poll': {
		  let [poll, opt] = text.split("|")

if (text.split("|") < 2)
                return m.reply(`Wrong format::\nExample:- poll who is the best president|Putin, Ruto`);

let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
         
   })

	  }
		break;

//========================================================================================================================//		      
	      case 'play':{
     if (!text) return m.reply("What song do you want to download?");
try {
    let search = await yts(text);
    let link = search.all[0].url;

const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
       ];

    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        // Checking if the API response is successful
        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
            continue;
          }
		ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
await client.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
		  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Download failed\n" + err.message);
            });
          return;
        }
      } catch (e) {
        continue;
      }
   }
    m.reply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙩𝙤 𝙛𝙚𝙩𝙘𝙝 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙪𝙧𝙡 𝙛𝙧𝙤𝙢 𝘼𝙋𝙄.");
  } catch (error) {
    m.reply("Download failed\n" + error.message);
  }
}
break;

//========================================================================================================================//		      
 case "play2": {	      
    if (!text)  return reply("What song do you want to download?");		      
try {
    let result = await searchYouTube(text);
    let downloadResult = result ? await downloadYouTube(result.url) : null;
    let platform = 'YouTube';

    if (!downloadResult) {
      result = await searchSpotify(text);
      downloadResult = result ? await downloadSpotify(result.url) : null;
      platform = 'Spotify';
    }

    if (!downloadResult) {
      result = await searchSoundCloud(text);
      downloadResult = result ? await downloadSoundCloud(result.url) : null;
      platform = 'SoundCloud';
    }

    if (!result || !downloadResult) {
      return reply("Unable to retrieve download URL from all sources!");
    }

    await client.sendMessage(m.chat, {
      document: { url: downloadResult.downloadUrl },
      mimetype: "audio/mp3",
      caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
      fileName: `${result.title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`,
      }, { quoted: m });
 
    await client.sendMessage(m.chat, {
      audio: { url: downloadResult.downloadUrl },
      mimetype: "audio/mp4",
      }, { quoted: m }); 

  } catch (error) {
    console.error('Error:', error);
    return reply(`An error occurred: ${error.message}`);
  }
}
 break;
		      
//========================================================================================================================//	      	      
	      case "inspect": {
const fetch = require('node-fetch');
const cheerio = require('cheerio');

    if (!text) return m.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
    if (!/^https?:\/\//i.test(text)) {
        return m.reply("Please provide a URL starting with http:// or https://");
    }

    try {
        const response = await fetch(text);
        const html = await response.text();
        const $ = cheerio.load(html);

        const mediaFiles = [];
        $('img[src], video[src], audio[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                mediaFiles.push(src);
            }
        });

        const cssFiles = [];
        $('link[rel="stylesheet"]').each((i, element) => {
            let href = $(element).attr('href');
            if (href) {
                cssFiles.push(href);
            }
        });

        const jsFiles = [];
        $('script[src]').each((i, element) => {
            let src = $(element).attr('src');
            if (src) {
                jsFiles.push(src);
            }
        });

        await m.reply(`**Full HTML Content**:\n\n${html}`);

        if (cssFiles.length > 0) {
            for (const cssFile of cssFiles) {
                const cssResponse = await fetch(new URL(cssFile, text));
                const cssContent = await cssResponse.text();
                await m.reply(`**CSS File Content**:\n\n${cssContent}`);
            }
        } else {
            await m.reply("No external CSS files found.");
        }

        if (jsFiles.length > 0) {
            for (const jsFile of jsFiles) {
                const jsResponse = await fetch(new URL(jsFile, text));
                const jsContent = await jsResponse.text();
                await m.reply(`**JavaScript File Content**:\n\n${jsContent}`);
            }
        } else {
            await m.reply("No external JavaScript files found.");
        }

        if (mediaFiles.length > 0) {
            await m.reply(`**Media Files Found**:\n${mediaFiles.join('\n')}`);
        } else {
            await m.reply("No media files (images, videos, audios) found.");
        }

    } catch (error) {
        console.error(error);
        return m.reply("An error occurred while fetching the website content.");
    }
}
	break;

//========================================================================================================================//		      
	      case 'metallic': {
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Metallic Nick");
      return;
    }
     try {
    var _0x29a9n6e5 = await mumaker.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a9n6e5.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d0734) {
    m.reply(_0x180d0734);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'ice': {		      
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Ice Nick");
      return;
    }
     try {
    var _0x295 = await mumaker.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x295.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d) {
    m.reply(_0x180d);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'snow': {	      
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Snow Nick");
      return;
    }
     try {
    var _029a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _029a96e5.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0180d034) {
    m.reply(_0180d034);
  }
}
	break;

//========================================================================================================================//		      
	      case 'impressive': {		      
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "impressive Nick");
      return;
    }
     try {
    var _0x29a96em5 = await mumaker.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96em5.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x18d034) {
    m.reply(_0x18d034);
  }
}
	break; 

//========================================================================================================================//		      
	      case 'noel': {	      		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Noel myself");
    return;
  } 
  try {
	
  var hunte = await mumaker.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunte.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x29df9) {
    m.reply("💀💀" + _0x29df9);
  }
}
	 break;

//========================================================================================================================//		      
	      case 'water':{
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Water myself");
    return;
  } 
  try {
	
  var hunterr = await mumaker.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunterr.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x9ddf9) {
    m.reply("💀💀" + _0x9ddf9);
  }
}
	 break;

//========================================================================================================================//		
	      case 'matrix':{		      		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Matrix myself");
    return;
  } 
  try {
	
  var hunteer = await mumaker.ephoto("https://en.ephoto360.com/matrix-text-effect-154.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteer.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x29ddf8) {
    m.reply("💀💀" + _0x29ddf8);
  }
}
	 break;
//========================================================================================================================//		
	      case 'light': {		      
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Light myself");
    return;
  } 
  try {
	
  var hunteqr = await mumaker.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunteqr.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x29ddf4) {
    m.reply("💀💀" + _0x29ddf4);
  }
}
	 break;

//========================================================================================================================//		      
	      case 'neon':{		
		     if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Neon Nick");
      return;
    }
     try {
    var _0x29a96e5 = await mumaker.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e5.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d034) {
    m.reply(_0x180d034);
  }
}
	break;

//========================================================================================================================//		      
	      case 'silver': case 'silva': {		      
		          if (!text || text == " ") {
      m.reply("Example Usage : " + prefix + "Silva Nick");
      return;
    }
     try {
    var _0x2996e = await mumaker.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x2996e.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d3) {
    m.reply(_0x180d3);
  }
}
	break;

//========================================================================================================================//		      
	      case 'devil':{		      
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Devil Nick");
      return;
    }
     try {
    var _0x9a96e = await mumaker.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x9a96e.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x80d03) {
    m.reply(_0x80d03);
  }
}
	break;

//========================================================================================================================//		      
	      case 'typography': {   
		          if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Typography Nick");
      return;
    }
     try {
    var _0x29a996e = await mumaker.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a996e.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d063) {
    m.reply(_0x180d063);
  }
}
	break;

//========================================================================================================================//		      
	      case 'purple': {		 
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "purple Nick");
      return;
    }
     try {
    var _0x29a96e = await mumaker.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96e.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d03) {
    m.reply(_0x180d03);
  }
}
	break;

//========================================================================================================================//		      
	      case 'thunder':{		       
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Thunder Nick");
      return;
    }
	try {
    var _0x29a96 = await mumaker.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x29a96.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    });
  } catch (_0x180d0) {
    m.reply(_0x180d0);
  }
}
  break;

//========================================================================================================================//		      
	case 'leaves': {		     
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
      return;
    }
	try {
    var _0x14192dl = await mumaker.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192dl.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x24de3) {
    m.reply(_0x24de3);
  }
}
	break;

//========================================================================================================================//		      
	      case '1917': {		      
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "1917 Hunter");
      return;
    }
	try {
    var _0x14192 = await mumaker.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x24de3dl) {
    m.reply(_0x24de3dl);
  }
}
	break;

//========================================================================================================================//		      
	      case 'arena': {		      
		      if (!text || text == "") {
      m.reply("Example Usage : " + prefix + "arena RAVEN-BOT");
      return;
    }
	try {
    var _0x14192d = await mumaker.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", text);
    m.reply("Wait a moment...");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x14192d.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x24de3d) {
    m.reply(_0x24de3d);
  }
}
	break;

//========================================================================================================================//		      
	      case 'hacker': {		      
		      if (!text || text == "") {
    m.reply("Example usage :  " + prefix + "hacker Nick");
    return;
  }
  try {
    let _0x4086bb = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4086bb.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x503c5f) {
    m.reply("🥵🥵 " + _0x503c5f);
  }
}
	break;

//========================================================================================================================//		      
	      case 'sand': {	 
		      if (!text || text == "") {
    m.reply("Example Usage : " + prefix + "sand Raven");
    return;
  }
  try {
    let _0x4959e5 = await mumaker.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x4959e5.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x593c10) {
    m.reply("🚫🚫 " + _0x593c10);
  }
}
	break;

//========================================================================================================================//		      
	      case 'dragonball': {		      
    if (!text || text == "") {
      m.reply("Example usage :  " + prefix + "dragonball Nick");
      return;
    }
      try {
    const _0x26f3ed = await mumaker.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);
     m.reply("*Wait a moment...*")
    await client.sendMessage(m.chat, {
      image: {
        url: _0x26f3ed.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x553773) {
    m.reply("🥵🥵 " + _0x553773);
  }
}
	 break;

//========================================================================================================================//		      
	      case 'naruto': {		      
		      if (!text || text == "") {
      m.reply("Example usage : " + prefix + "naruto Hunter");
      return;
    }
    try {
    var _0x357389 = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
 m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x357389.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x564fe1) {
    m.reply("🥵🥵 " + _0x564fe1);
  }
}
	  break;

//========================================================================================================================//		      
	      case 'graffiti': {		      
		      if (!text || text == "") {
    m.reply("Example usage : " + prefix + "graffiti Nick");
    return;
  }
  try {
    let _0x57ef84 = await mumaker.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: _0x57ef84.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
}
	 break;

//========================================================================================================================//		      
	      case 'cat': {		   
		  if (!text || text == "") { m.reply("Example usage : * " + prefix + "cat Nick");
    return;
  }
  try {
    let nick = await mumaker.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);
    m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: nick.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch (_0x27e2e5) {
    m.reply("🥵🥵 " + _0x27e2e5);
  }
    }
        break;

//========================================================================================================================//		      
	      case 'gold': {		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Gold myself");
    return;
  } 
  try {
	
  var hunter = await mumaker.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: hunter.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x29ddf9) {
    m.reply("💀💀" + _0x29ddf9);
  }
}
	 break;

//========================================================================================================================//		      
		      case 'child': {	    		     
		      if (!text || text == "") {
    m.reply("Example usage: " + prefix + "Child Raven");
    return;
  } 
  try {
	
  var tumba = await mumaker.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);
m.reply("*Wait a moment...*");
    await client.sendMessage(m.chat, {
      image: {
        url: tumba.image
      },
      caption: `GENERATED BY RAVEN-BOT`
    }, {
      quoted: m
    });
  } catch(_0x29ddf) {
    m.reply("💀💀" + _0x29ddf);
  }
	    }
		break;

//========================================================================================================================//		      
case 'joke': {
try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
😂 *Below is a random joke for you* 😂\n\n
*${joke.setup}*\n\n
${joke.punchline} 😄
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("Couldn't fetch a joke right now. Please try again later.");
    }
}
break;

//========================================================================================================================//		      
   case "gpass": case 'genpassword': {
		      try {
        const length = args[0] ? parseInt(args[0]) : 12; // Default length is 12 if not provided
        if (isNaN(length) || length < 8) {
            return reply('Please provide a valid length for the password (Minimum 08 Characters).');
        }

        const generatePassword = (len) => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = crypto.randomInt(0, charset.length);
                password += charset[randomIndex];
            }
            return password;
        };

        const password = generatePassword(length);
        const message = `Below is your password 🔥:`;

        // Send initial notification message
        await client.sendMessage(from, { text: message }, { quoted: m });

        // Send the password in a separate message
        await client.sendMessage(from, { text: password }, { quoted: m });
    } catch (e) {
        console.log(e);
        reply(`Error generating password🤕: ${e.message}`);
    }
}
break;

//========================================================================================================================//	
        case "funfact": {
  try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
 *RAVEN-MD RANDOM FUNFACT* 

${fact}

Isn't that interesting? 😄
`;

  return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("An error occurred while fetching a fun fact. Please try again later🤕.");
    }
}
break;

//========================================================================================================================//		      
	      case 'animegirl': {
try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await client.sendMessage(from, { image: { url: data.url }, caption: '*GENERATED BY RAVEN MD*' }, { quoted: m });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
}
break;

//========================================================================================================================//
case 'rship': {
	 const toM = (a) => '@' + a.split('@')[0];
try {
        // Ensure command is used in a group
        if (!m.isGroup) {
            return reply("This command can only be used in groups.");
        }

        // Get group participants
        const participants = groupMetadata.participants.map(p => p.id);

        if (participants.length < 2) {
            return reply("Not enough members to pair.");
        }

        // Sender of the command
        const sender = m.sender;

        // Randomly select another participant
        let randomParticipant;
        do {
            randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        } while (randomParticipant === sender);

        // Reply with the pairing
        const message = `${toM(sender)} your match is  ${toM(randomParticipant)}\nCongratulations☠️`;
        await client.sendMessage(from, { text: message, mentions: [sender, randomParticipant] });
    } catch (e) {
        console.error("Error in ship command:", e);
        reply("An error occurred while processing the command. Please try again.");
    }
}
break;

//========================================================================================================================//
	      case 'calculate': case 'calc': {
try {
    if (!text) {
      return m.reply("*Example usage:* .calculate 5+72");
    }

    // Validate the input to prevent unsafe operations
    if (!/^[0-9+\-*/().\s]+$/.test(text)) {
      return m.reply("Invalid format. Only numbers and +, -, *, /, ( ) are allowed.");
    }

    // Evaluate the mathematical expression
    let result = eval(text);

    // Reply with the result
    m.reply(`${result}`);
  } catch (e) {
    console.error("Error in .calculate command:", e);
    m.reply("Error in calculation. Please check your expression.");
  }
}
break;

//========================================================================================================================//
case "raven":
		{
        if (!text) return reply(`Hello there, what's your question?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/llama?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
      }
                break;

//========================================================================================================================//
case "gpt4":
           {
        if (!text) return reply(`Hello there, what's your question?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/Aoyo?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
		     }
                      break;

//========================================================================================================================//
case 'gpt3': {
        if (!q) return reply("Holla, I'm listening to you..");
try {
        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

   if (!data || !data.result) {
            return reply("OpenAI failed to respond. Please try again later.");
        }
        await reply(`${data.result}`);   
   
} catch (e) {
        console.error("Error in OpenAI command:", e); 
        reply("An error occurred while communicating With API");
    }
};
  break;

//========================================================================================================================//	      		      
case "gpt2":
   {
       if (!q) return reply("Hello there,  what's your question ?");
try {
  const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
  const { data } = await axios.get(apiUrl);

if (!data || !data.message) {
        return reply("Oops an error occurred!!.");
	}
        await reply(`${data.message}`);
    } catch (e) {
        console.error("Error in AI command:", e);
 reply("An error occurred while communicating with API.");
    }
}; 
                break;

//========================================================================================================================//
case 'gpt':{

if (!text) return m.reply("Hello there, what's going on ?");
	try {
     const data = await fetchJson(`https://api.dreaded.site/api/aichat?query=${text}`);
		
    if (data && data.result) {
	    const res = data.result;
	    await m.reply(res);
    } else {
	    m.reply("An error occurred!!");
    }
	} catch (error) {
reply('An error occured while communicating with the APIs\n' + error);
}
  }
break;

//========================================================================================================================//	      		      
 case 'trt': case 'translate':{
try {
    // Check if the message is quoted
    if (!m.quoted) {
      return m.reply("Please quote a message to translate.");
    }
    // Extract the language code from the text
    const langCode = text.trim;
    // Check if a valid language code is provided
    if (!langCode) {
      return m.reply("Please provide a valid language code. Example: .translate en");
    }
    // Get the quoted message
    const quotedMessage = m.quoted.text;
    // Translate the quoted message
    const translation = await translatte(quotedMessage, { to: langCode });
    // Send the translated message
    m.reply(`${translation.text}`);
  } catch (e) {
    console.error("Error in .translate command:", e);
    m.reply("An error occurred while translating the text. Please try again later.");
  }
 }
break;

//========================================================================================================================//		      
 case 'cast': {
    if (!Owner) throw NotOwner;
      if (!m.isGroup) throw group;
    if (!text) return m.reply(`provide a text to cast !`);
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    m.reply(`Success in casting the message to contacts\n\nDo not allways use this Command to avoid WA-bans ! `);
    for (let pler of mem) {
    client.sendMessage(pler, { text: q})
     }  
     m.reply(`Casting completed successfully😁`)
      }
      break;

//========================================================================================================================//		      
case "img": case "ai-img": case "image": case "images":{
		      var gis = require('g-i-s');
 if (!text) return m.reply("Provide a text");

    try {
        // Use the 'text' as the search term for images
        gis(text, async (error, results) => {
            if (error) {
                return m.reply("An error occurred while searching for images.\n" + error);
            }

            // Check if results are found
            if (results.length === 0) {
                return m.reply("No images found.");
            }

            // Limit the number of images to send (e.g., 5)
            const numberOfImages = Math.min(results.length, 5);
            const imageUrls = results.slice(0, numberOfImages).map(result => result.url);

            // Send the images
            const messages = imageUrls.map(url => ({
                image: { url },
                caption: `Downloaded by ${botname}`
            }));

            for (const message of messages) {
                await client.sendMessage(m.chat, message, { quoted: m });
            }
        });
    } catch (e) {
        m.reply("An error occurred.\n" + e);
    }
}
	break;

//========================================================================================================================//		      
	      case "foreigners": {
	if (!m.isGroup) throw group;	      
	if (!isAdmin) throw admin;
	if (!isBotAdmin) throw botAdmin;
		      
		let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => !_0x475052.startsWith(mycode) && _0x475052 != client.decodeJid(client.user.id));
    if (!args || !args[0]) {
      if (_0x2f8982.length == 0) {
        return m.reply("No foreigners detected.");
      }
      let _0x2d7d67 = `𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 ${mycode}. 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  ${_0x2f8982.length} 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n`;
      for (let _0x28761c of _0x2f8982) {
        _0x2d7d67 += `𓅂 @${_0x28761c.split("@")[0]}\n`;
      }
      _0x2d7d67 += `\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x`;
      client.sendMessage(m.chat, {
        text: _0x2d7d67,
        mentions: _0x2f8982
      }, {
        quoted: m
      });
    } else if (args[0] == "-x") {
      setTimeout(() => {
        client.sendMessage(m.chat, {
          text: `𝗥𝗮𝘃𝗲𝗻 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 ${_0x2f8982.length} 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️`
        }, {
          quoted: m
        });
        setTimeout(() => {
          client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
          setTimeout(() => {
            m.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }
	break;

//========================================================================================================================//
 case 'dalle': case 'createimage': {
		      
  if (!text) return m.reply("What image do you want to create ?");
		      
const apiUrl = `https://api.dreaded.site/api/imagine?text=${encodeURIComponent(text)}`;
m.reply('*Please wait i am generating your image...*');		      
try {
        const data = await fetchJson(apiUrl);
        if (!data.status || !data.result) {
            return m.reply("Something is wrong,  Api might be down!");
        }

        const { creator, result } = data;
        const caption = `There you go 💠`;

        await client.sendMessage(
            m.chat,
            {
                image: { url: result },
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        m.reply("An error occurred while generating the image.");
    }
};
break;
		      
//========================================================================================================================//		      
		      case "ai": {
			      const {
    GoogleGenerativeAI: _0x817910
  } = require("@google/generative-ai");
  const _0xc0423b = require("axios");
		      
  try {
    if (!m.quoted) {
      return m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
    }
    if (!text) {
      return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗥𝗔𝗩𝗘𝗡 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    }
    if (!/image|pdf/.test(mime)) {
      return m.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
    }
    let _0x3439a2 = await client.downloadAndSaveMediaMessage(m.quoted);
    let _0x3dfb7c = await uploadToCatbox(_0x3439a2);
    m.reply(`𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 ${mime.includes("pdf") ? "𝗣𝗗𝗙" : "𝗜𝗺𝗮𝗴𝗲"} ...`);
    const _0x4e9e6a = new _0x817910("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
    async function _0x309a3c(_0x1400ed, _0x1a081e) {
      const _0x53e4b2 = {
        responseType: "arraybuffer"
      };
      const _0x1175d9 = await _0xc0423b.get(_0x1400ed, _0x53e4b2);
      const _0x2a4862 = Buffer.from(_0x1175d9.data).toString("base64");
      const _0x2f6e31 = {
        data: _0x2a4862,
        mimeType: _0x1a081e
      };
      const _0x14b65d = {
        inlineData: _0x2f6e31
      };
      return _0x14b65d;
    }
    const _0x22a6bb = {
      model: "gemini-1.5-flash"
    };
    const _0x42849d = _0x4e9e6a.getGenerativeModel(_0x22a6bb);
    const _0x2c743f = [await _0x309a3c(_0x3dfb7c, "image/jpeg")];
    const _0xcf53e3 = await _0x42849d.generateContent([text, ..._0x2c743f]);
    const _0x195f9c = await _0xcf53e3.response;
    const _0x3db5a3 = _0x195f9c.text();
    await m.reply(_0x3db5a3);
  } catch (_0x4b3921) {
    m.reply("I am unable to analyze images at the moment\n" + _0x4b3921);
  }
}
 break;

//========================================================================================================================//		      
	      case "ai2": {
const axios = require("axios");

try {
if (!m.quoted) return m.reply("Send the image then tag it with the instruction.");

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Raven AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
if (!/image|pdf/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

                    let fdr = await client.downloadAndSaveMediaMessage(m.quoted)
                    let fta = await uploadToCatbox(fdr)
                    m.reply(`𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻[𝗥𝗔𝗩𝗘𝗡-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 ${mime.includes("pdf") ? "𝗣𝗗𝗙" : "𝗜𝗺𝗮𝗴𝗲"} . . .`);

const data = await fetchJson(`https://api.dreaded.site/api/gemini-vision?url=${fta}&instruction=${text}`);
let res = data.result
await m.reply(res); 

} catch (e) {

m.reply("I am unable to analyze images at the moment\n" + e)

}
	      }
		break;

//========================================================================================================================//		      
	      case "vision": {
		      if (!msgR || !text) {
    m.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗥𝗔𝗩𝗘𝗡 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
    return;
  }
  ;
  let _0x44b3e0;
  if (msgR.imageMessage) {
    _0x44b3e0 = msgR.imageMessage;
  } else {
    m.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
    return;
  };
  try {
    let _0x11f50e = await client.downloadAndSaveMediaMessage(_0x44b3e0);
    let _0x45392d = await uploadToCatbox(_0x11f50e);
    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
    let _0x4f137e = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x45392d + "&q=" + text)).json();
    const _0x4bfd63 = {
      text: _0x4f137e.BK9
    };
    await client.sendMessage(m.chat, _0x4bfd63, {
      quoted: m
    });
  } catch (_0x1be711) {
    m.reply("An error occured\n" + _0x1be711);
  }
}
	 break;

//========================================================================================================================//		      
		      case 'remini': {
			if (!quoted) return reply(`𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?`)
			if (!/image/.test(mime)) return reply(`𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 ${prefix + command}`)
			
			const { remini } = require('../lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(m.chat, { image: proses, caption: '𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁'}, { quoted: m })
			}
			break;

//========================================================================================================================//		      	    
case "kill": case "kickall": {
	  if (!m.isGroup) throw group;
          if (!isBotAdmin) throw botAdmin;
          if (!Owner) throw NotOwner;

          let raveni = participants.filter(_0x5202af => _0x5202af.id != client.decodeJid(client.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          m.reply("Initializing Kill command💀...");
      await client.groupSettingUpdate(m.chat, "announcement");
      await client.removeProfilePicture(m.chat);
      await client.groupUpdateSubject(m.chat, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(m.chat, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(m.chat);
	
          setTimeout(() => {
            client.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              client.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                m.reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
client.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break;
		      
//========================================================================================================================//		      
	      case "kill2": case "kickall2": {
    if (!Owner) throw NotOwner;
    if (!text) {
      return m.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
    }

    let groupId;
    let groupName;
    try {
      let inviteCode = args[0].split("https://chat.whatsapp.com/")[1];
      const groupInfo = await client.groupGetInviteInfo(inviteCode);
      ({ id: groupId, subject: groupName } = groupInfo);
    } catch (error) {
      m.reply("Why are you giving me an invalid group link?");
      return;
    }

    try {
      const groupMetadata = await client.groupMetadata(groupId);
      const participants = await groupMetadata.participants;
      let participantIds = participants
        .filter(participant => participant.id !== client.decodeJid(client.user.id))
        .map(participant => participant.id);

      await m.reply("☠️Initializing and Preparing to kill☠️ " + groupName);
      await client.groupSettingUpdate(groupId, "announcement");
      await client.removeProfilePicture(groupId);
      await client.groupUpdateSubject(groupId, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
      await client.groupUpdateDescription(groupId, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗥𝗮𝘃𝗲𝗻 𝗗𝗲𝘃 !");
      await client.groupRevokeInvite(groupId);

      await client.sendMessage(
        groupId,
        {
          text: `At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all ${participantIds.length} group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️`,
          mentions: participants.map(participant => participant.id)
        });

      await client.groupParticipantsUpdate(groupId, participantIds, "remove");

      const goodbyeMessage = {
        text: "Goodbye Group owner👋\nIt's too cold in Here🥶"
      };
      await client.sendMessage(groupId, goodbyeMessage);

      await client.groupLeave(groupId);
      await m.reply("```Successfully Killed💀```");
    } catch (error) {
      m.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
    }
  }
		      break;
		      
//========================================================================================================================//		      
		      case 'carbon': {
		      const fetch = require('node-fetch');

  let cap = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 ${botname}`;

  if (m.quoted && m.quoted.text) {
    const forq = m.quoted.text;

    try {
      let response = await fetch('https://carbonara.solopov.dev/api/cook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: forq,
          backgroundColor: '#1F816D',
        }),
      });

      if (!response.ok) return m.reply('API failed to fetch a valid response.')

      let per = await response.buffer();

      await client.sendMessage(m.chat, { image: per, caption: cap }, { quoted: m });
    } catch (error) {
      m.reply("An error occured\n" + error)
    }
  } else {
    m.reply('Quote a code message');
  }
}
	 break;

//========================================================================================================================//		      
		case 'define': {
		      try {
        if (!text) {
            return m.reply('Please provide a word.');
        }

        const word = encodeURIComponent(text);

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            return m.reply('Failed to fetch data. Please try again later.');
        }

        const data = await response.json();

        if (!data || !data[0] || !data[0].meanings || data[0].meanings.length === 0) {
            return m.reply('No definitions found for the provided word.');
        }

        const definitionData = data[0];
        const definition = definitionData.meanings[0].definitions[0].definition;
        
        const message = `${definition}`;

        await client.sendMessage(m.chat, { text: message }, { quoted: m });

    } catch (error) {
        console.error("Error occurred:", error);
        m.reply('An error occurred while fetching the data. Please try again later.\n' + error);
    }
}
	break;

//========================================================================================================================//		      
	         case "tweet": {
		      if (!text) return m.reply("provide some text for the tweet");

const displayname = pushname;
const username = m.sender.split('@')[0];
const avatar = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/vuxJCTB.jpeg');
const replies = "246";
const retweets = "125";
const theme = "dark";

const imageurl = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayname)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;



await client.sendMessage(m.chat, { image: { url: imageurl}, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`}, { quoted: m}) 

	}
	 break;

//========================================================================================================================//		      
		      case "pickupline": {
		      const API_URL = 'https://api.popcat.xyz/pickuplines';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { pickupline } = await response.json();
        const lineMessage = `${pickupline}`;

        await client.sendMessage(m.chat, { text: lineMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "quotes": {
		      const API_URL = 'https://favqs.com/api/qotd';

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { quote } = await response.json();
        const quoteMessage = `${quote.body} \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 ${quote.author}`;

        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
}
	break;

//========================================================================================================================//		      
		      case "google": {
		      const axios = require("axios");
        if (!text) {
            m.reply('Provide a search term!\nEg: .Google What is treason')
            return;
        }
        let {
            data
        } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`)
        if (data.items.length == 0) {
            m.reply("❌ Unable to find a result")
            return;
        }
        let tex = `SEARCH FROM GOOGLE\n🔍 Term:- ${text}\n\n`;
        for (let i = 0; i < data.items.length; i++) {
            tex += `🪧 Title:- ${data.items[i].title}\n🖥 Description:- ${data.items[i].snippet}\n🌐 Link:- ${data.items[i].link}\n\n`
        }
        m.reply(tex)
       

    }
      break;

//========================================================================================================================//		      
		      case "hack": {
		if(!Owner) throw NotOwner; 
		      try {
			      
    const steps = [
      '⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️',
      '𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️',
      '```██ 10%``` ⏳',
      '```████ 20%``` ⏳',
      '```██████ 30%``` ⏳',
      '```████████ 40%``` ⏳',
      '```██████████ 50%``` ⏳',
      '```████████████ 60%``` ⏳',
      '```██████████████ 70%``` ⏳',
      '```████████████████ 80%``` ⏳',
      '```██████████████████ 90%``` ⏳',
      '```████████████████████ 100%``` ✅',
      "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```",
    "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```",
    "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```",
    "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"
    ];
			      
    for (const line of steps) {
      await client.sendMessage(m.chat, { text: line }, { quoted: m });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('Error during prank:', error);

    client.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
} 
  break;

//========================================================================================================================//		      
case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });
      break;

//========================================================================================================================//		      
		      case 'save': {
  const textL = m.text.toLowerCase();
  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

if (Owner && quotedMessage && textL.startsWith(prefix + "save") && !m.quoted.chat.includes("status@broadcast")) {
    return m.reply("You did not tag a status media to save.");
  }

if (Owner && quotedMessage && textL.startsWith(prefix + "save") && m.quoted.chat.includes("status@broadcast")) {
    
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
    }
     }
      }
    break;
		      
//========================================================================================================================//		      
	      case 'gitclone': {
		      if (!text) return m.reply(`Where is the link?`)
if (!text.includes('github.com')) return m.reply(`Is that a GitHub repo link ?!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user3, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    await client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply("error"))

		    }
		      break;

//========================================================================================================================//		      

//========================================================================================================================//		      
		case 'github': {
 if (!text) return m.reply('Provide a github username to stalk');
 
try {
const response = await fetch(`https://itzpire.com/stalk/github-user?username=${text}`)

const data = await response.json()
 
    const username = data.data.username;
    const nickname = data.data.nickname;
    const bio = data.data.bio;
    const profilePic = data.data.profile_pic;
    const url = data.data.url;
    const type = data.data.type;
    const isAdmin = data.data.admin;
    const company = data.data.company;
    const blog = data.data.blog;
    const location = data.data.location;
    const publicRepos = data.data.public_repo;
    const publicGists = data.data.public_gists;
    const followers = data.data.followers;
    const following = data.data.following;
    const createdAt = data.data.ceated_at;
    const updatedAt = data.data.updated_at;
    
const message = `Username:- ${username}\n\nNickname:- ${nickname}\n\nBio:- ${bio}\n\nLink:- ${url}\n\nLocation:- ${location}\n\nFollowers:- ${followers}\n\nFollowing:- ${following}\n\nRepos:- ${publicRepos}\n\nCreated:- ${createdAt}`

await client.sendMessage(m.chat, { image: { url: profilePic}, caption: message}, {quoted: m})

} catch (error) {

m.reply("Unable to fetch data\n" + error)

}
      }
       break;  

//========================================================================================================================//		      
	      case "screenshot": case "ss": {
		      try {
let cap = `𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 ${botname}`

if (!text) return m.reply("Provide a website link to screenshot.")

const image = `https://image.thum.io/get/fullpage/${text}`

await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });


} catch (error) {

m.reply("An error occured.")

}

	      }
	      break;

//========================================================================================================================//		      
	      case "alive": case "test": {
		      const audiovn = "./Media/alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "𝗥𝗮𝘃𝗲𝗻",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝗛𝗶 𝗛𝘂𝗺𝗮𝗻👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗻𝗼𝘄",
          body: "𝗥𝗔𝗩𝗘𝗡 𝗕𝗢𝗧",
          thumbnailUrl: "https://files.catbox.moe/7f98vp.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
	await client.sendMessage(m.chat, dooc, {quoted: m });
	      }
		 break;
		      
//========================================================================================================================//		      
	case "removebg": {
try {

const cap = "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧";
if (!m.quoted) return m.reply("Send the image then tag it with the command.");
if (!/image/.test(mime)) return m.reply("That is not an image, try again while quoting an actual image.");             

let fdr = await client.downloadAndSaveMediaMessage(m.quoted)
let fta = await uploadToCatbox(fdr)
                    m.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");

const image = `https://api.dreaded.site/api/removebg?imageurl=${fta}`
await client.sendMessage(m.chat, { image: { url: image }, caption: cap}, {quoted: m });

} catch (error) {
m.reply("An error occured...")

}

      }
	break;

//========================================================================================================================//		      
		     case 'fact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/fact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}
	      }
    break;

//========================================================================================================================//		      
 case 'catfact': {
	try {
const data = await fetchJson('https://api.dreaded.site/api/catfact');

const fact = data.fact;

await m.reply(fact);

} catch (error) {

m.reply('Something is wrong.')

}

    }
	      break;

//========================================================================================================================//		      
	  case 'tts': case 'say': {

const googleTTS = require('google-tts-api');

if (!text) return m.reply("Povide a text for conversion !");

const url = googleTTS.getAudioUrl(text, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
});
             client.sendMessage(m.chat, { audio: { url:url},mimetype:'audio/mp4', ptt: true }, { quoted: m });

	}
	 break;

//========================================================================================================================//		      
 
//========================================================================================================================//		      
 case 'weather': {
		      try {

if (!text) return m.reply("provide a city/town name");

const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
        const data = await response.json();

console.log("Weather data:",data);

        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const rainVolume = data.rain ? data.rain['1h'] : 0;
        const cloudiness = data.clouds.all;
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);

} catch (e) { m.reply("Unable to find that location.") }
  }
   break;

//========================================================================================================================//		      
case "compile-js":
if (!text && !m.quoted) throw 'Quote/tag a Js code to compile.';

const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

let resultPromise1 = node.runSource(sourcecode1);
resultPromise1
    .then(resultt1 => {
        console.log(resultt1);
reply(resultt1.stdout);
reply(resultt1.stderr);
    })
    .catch(err => {
        console.log(resultt1.stderr);
reply(resultt1.stderr);
    });
      break;

//========================================================================================================================//		      
  case 'quotely': {
try {
if (!m.quoted.text) throw 'qoute a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/ravenquotely.js')
                
                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')
                
const rel = await quote(xf, pushname, pppuser)
                
                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `RavenBot`
                })

} catch (errr) { 
 await reply("Qoute some text for quotely")}

            }
             break;

//========================================================================================================================//		      
		      case "fullpp": {
		      if(!Owner) throw NotOwner; 
		      const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys');
		      try {
const fs = require("fs");
if(!msgR) { m.reply('𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage

  } else {
    m.reply('𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...'); return
  } ;

var medis = await client.downloadAndSaveMediaMessage(media);
         var {
                        img
                    } = await generateProfilePicture(medis)

client.query({
                tag: 'iq',
                attrs: {
                    target: undefined,
                    to: S_WHATSAPP_NET,
                    type:'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            })      
                    fs.unlinkSync(medis)
                    m.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅")

} catch (error) {

m.reply("An error occured while updating profile photo\n" + error)

}
     }
	  break;

//========================================================================================================================//		      
            case "upload": {
 const fs = require("fs");
const path = require('path');
const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) return m.reply('Quote an image or video')
let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
    let fta2 = await client.downloadAndSaveMediaMessage(q)
    let link = await uploadtoimgur(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)

    m.reply(`Media Link:\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;

//========================================================================================================================//
        case "url": {
 const fs = require("fs");
const path = require('path');
const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('Quote an image or video')
let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)

if (isTele) {
    let fta2 = await client.downloadAndSaveMediaMessage(q)
    let link = await uploadToCatbox(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)
    m.reply(`Media Link:\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
    }
      break;
		      
//========================================================================================================================//		      
     case 'attp':
                if (!q) return reply('I need text;')
              
                client.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
    case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)
           
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await uploadToCatbox(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }  
             break;

//========================================================================================================================//		      
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

//========================================================================================================================//		      
case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
     break;

//========================================================================================================================//		      
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
     break;

//========================================================================================================================//		      
	case "add": {
    if (!isBotAdmin) throw botAdmin;
    if (!isAdmin) throw admin;
    if (!m.isGroup) throw group;		      
if (!q || isNaN(q)) return m.reply("provide number to be added in this format.\n\nadd 254114660061");
try {
        const userToAdd = `${q}@s.whatsapp.net`;  // Format the phone number
        // Add the user to the group
        await client.groupParticipantsUpdate(m.chat, [userToAdd], "add");
        // Confirm the addition
        reply(`User ${q} has been added to the group.`);
    } catch (e) {
        console.error('Error adding user:', e);
        reply('An error occurred while adding the user. Please make sure the number is correct and they are not already in the group.');
    }
}
break;
		      
//========================================================================================================================//		      
  case "system": 
  
              client.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/duv8ac.jpg' }, caption:`*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: ${Rspeed.toFixed(4)} 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: ${runtime(process.uptime())}*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆`}); 
 break;

//========================================================================================================================//		      
case "vcf": case "group-vcf": {
if (!m.isGroup) return m.reply("Command meant for groups");

const fs = require("fs");
let gcdata = await client.groupMetadata(m.chat)
let gcmem = participants.map(a => a.id)

let vcard = ''
let noPort = 0

for (let a of gcdata.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}

let cont = './contacts.vcf'

await m.reply('𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗥𝗮𝘃𝗲𝗻 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 '+gcdata.participants.length+' 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...');
await fs.writeFileSync(cont, vcard.trim())
await client.sendMessage(m.chat, {
    document: fs.readFileSync(cont), mimetype: 'text/vcard', fileName: 'Group contacts.vcf', caption: 'VCF for '+gcdata.subject+'\n'+gcdata.participants.length+' contacts'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(cont)

}
   break;

//========================================================================================================================//		      
case "faker": {
	if (!m.isGroup) throw group;	      
	if (!isAdmin) throw admin;
	if (!isBotAdmin) throw botAdmin;
		      
		let _0x2f8982 = participants.filter(_0x3c9d8b => !_0x3c9d8b.admin).map(_0x1db3fb => _0x1db3fb.id).filter(_0x475052 => _0x475052.startsWith("1") && _0x475052 != client.decodeJid(client.user.id));
    if (!args || !args[0]) {
      if (_0x2f8982.length == 0) {
        return m.reply("𝙽𝚘 𝚏𝚊𝚔𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚍𝚎𝚝𝚎𝚌𝚝𝚎𝚍.");
      }
      let _0x2d7d67 = `𝚁𝚊𝚟𝚎𝚗 𝚑𝚊𝚜 𝚍𝚎𝚝𝚎𝚌𝚝𝚎𝚍 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 ${_0x2f8982.length} 𝙵𝚊𝚔𝚎 𝚊𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙:- \n`;
      for (let _0x28761c of _0x2f8982) {
        _0x2d7d67 += `🚮 @${_0x28761c.split("@")[0]}\n`;
      }
      _0x2d7d67 += `\n𝚃𝚘 𝚛𝚎𝚖𝚘𝚟𝚎 𝚝𝚑𝚎𝚖 𝚜𝚎𝚗𝚍 𝚏𝚊𝚔𝚎𝚛 -x`;
      client.sendMessage(m.chat, {
        text: _0x2d7d67,
        mentions: _0x2f8982
      }, {
        quoted: m
      });
    } else if (args[0] == "-x") {
      setTimeout(() => {
        client.sendMessage(m.chat, {
          text: `𝙽𝚘𝚠 𝚁𝚊𝚟𝚎𝚗 𝚠𝚒𝚕𝚕 𝚛𝚎𝚖𝚘𝚟𝚎 ${_0x2f8982.length} 𝙵𝚊𝚔𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝𝚜 𝚏𝚛𝚘𝚖 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙.\n\n𝙶𝚘𝚘𝚍𝚋𝚢𝚎👋 𝙵𝚊𝚔𝚎 𝚙𝚎𝚘𝚙𝚕𝚎.`
        }, {
          quoted: m
        });
        setTimeout(() => {
          client.groupParticipantsUpdate(m.chat, _0x2f8982, "remove");
          setTimeout(() => {
            m.reply("𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚛𝚎𝚖𝚘𝚟𝚎𝚍 𝚊𝚕𝚕 𝚏𝚊𝚔𝚎 𝚊𝚌𝚌𝚘𝚞𝚗𝚝𝚜✅.");
          }, 1000);
        }, 1000);
      }, 1000);
    }
      }	      
	break;

//========================================================================================================================//		      
   case "mail": {
	const  { TempMail } = require("tempmail.lol");

const tempmail = new TempMail();

      const inbox = await tempmail.createInbox();
      const emailMessage = `${inbox.address}`;

await m.reply(emailMessage);

const mas = await client.sendMessage(m.chat, { text: `${inbox.token}` });
      
await client.sendMessage(m.chat, { text: `Quoted text is your token. To fetch messages in your email use <.inbox your-token>`}, { quoted: mas});

      }
       break;

//========================================================================================================================//		      
       case "hacker2": {
       if (!/image/.test(mime)) return m.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");  

let fdr = await client.downloadAndSaveMediaMessage(qmsg);

const fta = await uploadToCatbox(fdr);

const imagelink = `https://aemt.me/hacker2?link=${fta}`;

await client.sendMessage(m.chat, { image: { url: imagelink}, caption: "Converted by Raven! 🦄"}, { quoted: m});

}
  break;

//========================================================================================================================//		      
        case "inbox": {
	 if (!text) return m.reply("To fetch messages from your mail, provide the email address which was issued.")

const mail = encodeURIComponent(text);
        const checkMail = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${mail}`;

try {
            const response = await fetch(checkMail);

if (!response.ok) {

                return m.reply(`${response.status} error occurred while communicating with API.`);
            }

const data = await response.json();

            if (!data || !data.messages) {

                return m.reply('I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.');
            }

const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const mailMessage = `👥 Sender: ${sender}\n📝 Subject: ${subject}\n🕜 Date: ${date}\n📩 Message: ${messageBody}`;

                await m.reply(mailMessage);
            }
        } catch (error) {
            console.error('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');

            return m.reply('𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!');
        }
        }
         break;

//========================================================================================================================//		      
 case "anime": case "random-anime": {
	const axios = require("axios");

  const link = "https://api.jikan.moe/v4/random/anime";

  try {
    const response = await axios.get(link);
    const data = response.data.data;

    const title = data.title;
    const synopsis = data.synopsis;
    const imageUrl = data.images.jpg.image_url;
    const episodes = data.episodes;
    const status = data.status;

    const message = `📺 Title: ${title}\n🎬 Épisodes: ${episodes}\n📡 Status: ${status}\n📝 Synopsis: ${synopsis}\n🔗 URL: ${data.url}`;

    await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { quoted: m });
  } catch (error) {
    
   m.reply('𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!');
  }
	}
	 break;

//========================================================================================================================//		      
		 case "news": {
		      const response = await fetch('https://fantox001-scrappy-api.vercel.app/technews/random');
    const data = await response.json();

    const { thumbnail, news } = data;

        await client.sendMessage(m.chat, { image: { url: thumbnail }, caption: news }, { quoted: m });

	      }
		break;

//========================================================================================================================//		      
case 'approve': case 'approve-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗮𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");

}
 break;

//========================================================================================================================//		      
	  case 'reject': case 'reject-all': {
	if (!m.isGroup) throw group;
if (!isAdmin) throw admin;
if (!isBotAdmin) throw botAdmin;

const responseList = await client.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");

for (const participan of responseList) {
    const response = await client.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝗵𝗮𝘃𝗲 𝗯𝗲𝗲𝗻 𝗿𝗲𝗷𝗲𝗰𝘁𝗲𝗱!");

}
 break;

//========================================================================================================================//		      
	      case "wewee": case "mh": case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
          }
          break;

//========================================================================================================================//		      
       case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗥𝗔𝗩𝗘𝗡-𝗠𝗗:*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 
            break;

//========================================================================================================================//		      
case 'restart':  
  if (!Owner) throw NotOwner; 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;

//========================================================================================================================//		      
case "remove": case "kick": { 

       if (!m.isGroup) throw group; 
       if (!isBotAdmin) throw botAdmin; 
      if (!isAdmin) throw admin;
  
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
            return m.reply("Who should i remove !?");
        }
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
        const parts = users.split('@')[0];

if (users == "254114660061@s.whatsapp.net") return m.reply("It's an Owner Number! 😡");

	  if (users  == client.decodeJid(client.user.id)) throw 'I cannot remove Myself 😡';

		      m.reply(`@${parts} Goodbye🤧`);

                 await client.groupParticipantsUpdate(m.chat, [users], 'remove'); 
 

}
  break;

//========================================================================================================================//		      
    case "instagram": case "igdl": case "ig": {
		      
const { igdl } = require("ruhend-scraper");

  if (!text) {
    return m.reply("Please provide an Instagram link for the video.");
  }

  if (!text.includes('https://www.instagram.com/')) {
    return m.reply("That is not a valid Instagram link.");
  }

await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });


  try {
    
    const downloadData = await igdl(text);
   
    if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
      return m.reply("No video found at the provided link.");
    }

    const videoData = downloadData.data;
    for (let i = 0; i < Math.min(20, videoData.length); i++) {
      const video = videoData[i];
      const videoUrl = video.url;

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
      },{ quoted: m });
    }
  } catch (error) {
    console.error(error);
    return m.reply("An error occurred while processing the request.");
  }
}
break;

//========================================================================================================================//
  case "twitter": case "twtdl": {
 if (!q) return reply("Please provide a valid Twitter Link !");

if (!text.includes('x.com')) {
    return m.reply("That is not a valid Twitter link.");
}
	  
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });
		      
try {
    const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result) {
      return reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { video_hd } = data.result;

	await client.sendMessage(m.chat, {
              video: { url: video_hd },
              caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, { quoted: m });

	} catch (error) {
    console.error("Error:", error);
    reply("An error occurred while processing your request. Please try again.");
  }
};	      
	break;

//========================================================================================================================//		      
	 case "facebook": case "fb": case "fbdl": {
if (!text) {
        return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
    }

    if (!text.includes("facebook.com")) {
        return m.reply("That is not a facebook link.");
    }

await client.sendMessage(m.chat, {
                       react: { text: '✅️', key: m.key }
                      });
    try {
                let data = await fetchJson(`https://api.dreaded.site/api/facebook?url=${text}`);


        if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            return m.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
        }

        const fbvid = data.facebook.sdVideo;

        if (!fbvid) {
            return m.reply("Wrong facebook data. Please ensure the video exists.");
        }

        await client.sendMessage(
            m.chat,
            {
                video: { url: fbvid },
                caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                gifPlayback: false,
            },
            { quoted: m }
        );
    } catch (e) {
        console.error("Error occurred:", e);
        m.reply("An error occurred. API might be down. Error: " + e.message);
    }
}
break;

//========================================================================================================================//		      
      case "tiktok": case "tikdl":  {
if (!text) {
    return m.reply('Please provide a TikTok video link.');
  }
	      
if (!text.includes("tiktok.com")) {
        return m.reply("That is not a TikTok link.");
}
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });

 try {
    const response = await axios.get(`https://bk9.fun/download/tiktok?url=${encodeURIComponent(text)}`);

    if (response.data.status && response.data.BK9) {
      const videoUrl = response.data.BK9.BK9;
      const description = response.data.BK9.desc;
      const commentCount = response.data.BK9.comment_count;
      const likesCount = response.data.BK9.likes_count;
      const uid = response.data.BK9.uid;
      const nickname = response.data.BK9.nickname;
      const musicTitle = response.data.BK9.music_info.title;

      await client.sendMessage(m.chat, {
        text: `Data fetched successfully✅ wait a moment. . .`,
      }, { quoted: m });

      await client.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        gifPlayback: false
      }, { quoted: m });

    } else {
      reply('Failed to retrieve video from the provided link.');
    }

  } catch (e) {
    reply(`An error occurred during download: ${e.message}`);
  }
}
  break;

//========================================================================================================================//
  case "pinterest": case "pin":
	      {      
	if (!text) return reply('𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗽𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁 𝗹𝗶𝗻𝗸 !');
		      
if (!text.includes("pin.it")) {
        return m.reply("That is not a pinterest link.");
    }	
await client.sendMessage(m.chat, {
      react: { text: '✅️', key: m.key }
    });
 
try {
        const pinterestUrl = text;
        const response = await axios.get(`https://bk9.fun/download/pinterest?url=${encodeURIComponent(pinterestUrl)}`);

        if (!response.data.status) {
            return reply('Unable to fetch pinterest data.');
        }

        const media = response.data.BK9;
        const capp = `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧`;

if (media.length > 0) {
            const videoUrl = media.find(item => item.url.includes('.mp4'))?.url;
            const imageUrl = media.find(item => item.url.includes('.jpg'))?.url;

if (videoUrl) {
                await client.sendMessage(m.chat, { video: { url: videoUrl }, caption: capp }, { quoted: m });
            } else 
if (imageUrl) {
                await client.sendMessage(m.chat, { image: { url: imageUrl }, caption: capp }, { quoted: m });
            } else {
                reply('No Video found!');
            }
        } else {
            reply('No Image found.');
        }
    } catch (e) {
        console.error(e);
        await client.sendMessage(m.chat, { react: { text: '☠️', key: mek.key } });
        reply('An error occurred while processing your request.');
    }
}
break;
		      
//========================================================================================================================//
	      case "epl": case "epl-table": {
		      
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PL');
        const standings = data.data;

        const message = ` 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗘𝗽𝗹 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;

        await m.reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗘𝗽𝗹 standings.');
    }

 }
	break;
		      
//========================================================================================================================//
	      case "laliga": case "pd-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PD');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗮𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗟𝗮𝗹𝗶𝗴𝗮 standings.');
  }
}   
break;
		      
//========================================================================================================================//
	      case "bundesliga": case "bl-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/BL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "ligue-1": case "lg-1": {
  try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/FL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗶𝗴𝘂𝗲-1 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗹𝗶𝗴𝘂𝗲-1 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "serie-a": case "sa-table":{
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/SA');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗦𝗲𝗿𝗶𝗲-𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗦𝗲𝗿𝗶𝗲-𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
     case "fixtures": case "matches": {
 try {
        let pl, laliga, bundesliga, serieA, ligue1;

        const plData = await fetchJson('https://api.dreaded.site/api/matches/PL');
        pl = plData.data;

        const laligaData = await fetchJson('https://api.dreaded.site/api/matches/PD');
        laliga = laligaData.data;

        const bundesligaData = await fetchJson('https://api.dreaded.site/api/matches/BL1');
        bundesliga = bundesligaData.data;

        const serieAData = await fetchJson('https://api.dreaded.site/api/matches/SA');
        serieA = serieAData.data;

        const ligue1Data = await fetchJson('https://api.dreaded.site/api/matches/FR');
        ligue1 = ligue1Data.data;

        let message = `𝗧𝗼𝗱𝗮𝘆𝘀 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗙𝗶𝘅𝘁𝘂𝗿𝗲𝘀 ⚽\n\n`;

        message += typeof pl === 'string' ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl}\n\n` : pl.length > 0 ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲: No matches scheduled\n\n";

        if (typeof laliga === 'string') {
            message += `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga}\n\n`;
        } else {
            message += laliga.length > 0 ? `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga.map(match => {
                const { game, date, time } = match;
                return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
            }).join('\n')}\n\n` : "🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮: No matches scheduled\n\n";
        }

        message += typeof bundesliga === 'string' ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga}\n\n` : bundesliga.length > 0 ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮: No matches scheduled\n\n";

        message += typeof serieA === 'string' ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA}\n\n` : serieA.length > 0 ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔: No matches scheduled\n\n";

        message += typeof ligue1 === 'string' ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1}\n\n` : ligue1.length > 0 ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇫🇷 𝗟𝗶𝗴𝘂𝗲- 1: No matches scheduled\n\n";

        message += "𝗧𝗶𝗺𝗲 𝗮𝗻𝗱 𝗗𝗮𝘁𝗲 𝗮𝗿𝗲 𝗶𝗻 𝗘𝗮𝘀𝘁 𝗔𝗳𝗿𝗶𝗰𝗮 𝗧𝗶𝗺𝗲𝘇𝗼𝗻𝗲 (𝗘𝗔𝗧).";

        await m.reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch matches.' + error);
    }
};
break;		      
		      
//========================================================================================================================//		      
 case 'sc': case 'script': case 'repo':

 client.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/416c3ae0cfe59be8db011.jpg` }, caption: ` Hello👋 *${pushname}*, 𝗕𝗲𝗹𝗼𝘄 𝗶𝘀 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗴𝗶𝘁𝗵𝘂𝗯 𝗿𝗲𝗽𝗼𓅂\n\nFork and maybe give us a star🌟.\n\n https://github.com/HunterNick2/RAVEN-BOT\n\nLink with your whatsapp using pairing link below\n\nhttps://pairing-raven.onrender.com\n\nCopy the session and paste it on the SESSION string, Fill in the other required Variables before Deploy\n\nEnjoy and have fun with the Bot\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀 !`},{quoted : m });

   break;
                                                  
//========================================================================================================================//
		      case 'closetime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Countdown of  ${q} starting from now to close the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱`
                    client.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
		      
                break;

//========================================================================================================================//		      
		      case 'opentime':
                if (!m.isGroup) throw group;
                if (!isAdmin) throw admin;
                if (!isBotAdmin) throw botAdmin;
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Countdown of ${q} starting from now to open the group`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                 break;

//========================================================================================================================//		      
 case "close": case "mute": { 
  
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 

//========================================================================================================================//		      
 case "open": case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 
  
 }
        break; 

//========================================================================================================================//		      
          case "disp-1": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

//========================================================================================================================//		      
          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 🦄'); 
         } 
 break; 

//========================================================================================================================//		      
           case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Ttag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Successfully demoted! 😲'); 
         } 
 break;

//========================================================================================================================//		      
          case "disp-7": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 7 days!'); 
  
 } 
 break; 

//========================================================================================================================//		      
         case "disp-90": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 90 days!'); 
 } 
 break; 

//========================================================================================================================//		      
        case "disp-off": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
   break;

//========================================================================================================================//		      
 case "icon": case 'gpp': { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated Successfully✅️'); 
    } 
    break;

//========================================================================================================================//		      
 case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }          
  break;

//========================================================================================================================//		      
          case "delete": case "del": { 
if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;

//========================================================================================================================//		      
          case "leave": { 
                 if (!Owner) throw NotOwner;
		 if (!m.isGroup) throw group;
 await client.sendMessage(m.chat, { text : '𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗥𝗮𝘃𝗲𝗻-𝗔𝗶 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...' , mentions: participants.map(a => a.id)}, { quoted : m }); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 

//========================================================================================================================//		      
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated✅️'); 
             } 
             break; 

//========================================================================================================================//		      
           case "desc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated✅️'); 
             } 
 break; 

//========================================================================================================================//		      
     case "hidetag": case "tag": { 
             if (!m.isGroup) throw group;          
            client.sendMessage(m.chat, { text : q ? q : '😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 

//========================================================================================================================//		      
      case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `𝗢𝗻𝗹𝘆 𝗳𝗼𝗼𝗹𝘀 𝗮𝗿𝗲 𝘁𝗮𝗴𝗴𝗲𝗱 𝗵𝗲𝗿𝗲😅: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `𓅂 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;

//========================================================================================================================//		      
case "whatsong": case "shazam": {
          let acr = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!m.quoted) {
            throw "Tagg a short video or audio";
          }

          let d = m.quoted ? m.quoted : m;
          let mimes = (d.msg || d).mimetype || d.mediaType || '';
          if (/video|audio/.test(mimes)) {
            let buffer = await d.download();
            await reply("Analyzing the media...");
            let {
              status,
              metadata
            } = await acr.identify(buffer);
            if (status.code !== 0x0) {
              throw status.msg;
            }
            let { title, artists, album, genres, release_date } = metadata.music[0x0];
            let txt = "*• Title:* " + title + (artists ? "\n*• Artists:* " + artists.map(_0x4f5d59 => _0x4f5d59.name).join(", ") : '');
            txt += '' + (album ? "\n*• Album:* " + album.name : '') + (genres ? "\n*• Genres:* " + genres.map(_0xf7bf2e => _0xf7bf2e.name).join(", ") : '') + "\n";
            txt += "*• Release Date:* " + release_date;
            await client.sendMessage(m.chat, {
              'text': txt.trim()
            }, {
              'quoted': m
            });
	  }
	}
	break; 
		      
//========================================================================================================================//
        case "s": case "sticker": 
{
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image or a short video.') ; return } ;
let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
 else {
    m.reply('That is neither an image nor a short video! '); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//		      
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;

//========================================================================================================================//		      
case "list": case "vars": case "help":
let vaa = `𝟏 Owner➣ 𝐆𝐞𝐭 𝗼𝘄𝗻𝗲𝗿  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`
reply(vaa)
break;

//========================================================================================================================//		      
  case "vv": case "retrieve":{

if (!m.quoted) return m.reply("quote a viewonce message eh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Retrieved by Raven!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Retrieved by Raven!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
	      case "alaa": case "wiih": case "waah": case "ehee": case "vv2": case "mmmh":{

if (!m.quoted) return m.reply("Hurrahhh")

  const quotedMessage = m.msg?.contextInfo?.quotedMessage;

    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      client.sendMessage(client.user.id, { image: { url: imageUrl }, caption: `Retrieved by Raven!\n${imageCaption}`}, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      client.sendMessage(client.user.id, { video: { url: videoUrl }, caption: `Retrieved by Raven!\n${videoCaption}`}, { quoted: m });
    }
      }
	break;

//========================================================================================================================//		      
    case 'take': {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgR) { m.reply('Quote an image, a short video or a sticker to change watermark.') ; return } ;

let media;
if (msgR.imageMessage) {
     media = msgR.imageMessage
  } else if(msgR.videoMessage) {
media = msgR.videoMessage
  } 
  else if (msgR.stickerMessage) {
    media = msgR.stickerMessage ;
  } else {
    m.reply('This is neither a sticker, image nor a video...'); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: pushname,
            author: pushname,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;

//========================================================================================================================//	  
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

//========================================================================================================================//		      
case "ytmp3": case "yta": {
const ytSearch = require("yt-search");
const fetch = require('node-fetch');
try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.');

        let search = await yts(text);
    let link = search.all[0].url;

    const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
       ];

    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        // Checking if the API response is successful
        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
            continue;
          }
		ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
              await client.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
		  caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Download failed\n" + err.message);
            });

          return;
        }
      } catch (e) {
        // Continue to the next API if one fails
        continue;
      }
   }
    m.reply("An error occurred. All APIs might be down or unable to process the request.");
  } catch (error) {
    m.reply("Download failed\n" + error.message);
  }
 }
  break;

//========================================================================================================================//		      
case 'ytmp4':
case "ytv": {
	try {

if (!text) return m.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!")

        let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
        if (!urls) return m.reply('𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸');
        let urlIndex = parseInt(text) - 1;
        if (urlIndex < 0 || urlIndex >= urls.length)
                return m.reply('𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.');

        let search = await yts(text);
    if (!search.all.length) {
      return reply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply("Unable to fetch the video. Please try again later.");
    }
  } catch (error) {
 
    return reply(`An error occurred: ${error.message}`);
  }
};
  break;

//========================================================================================================================//		      
    case "ping": case "speed": {
                 
	    await loading ()
	     m.reply (`𝗣𝗼𝗻𝗴\n ${Rspeed.toFixed(4)} 𝗠𝘀`); 
         } 
 break; 

//========================================================================================================================//		      
  case "uptime": { 
                 m.reply (`${runtime(process.uptime())}`) 
 } 
 break;

//========================================================================================================================//		      
	case 'runtime':
		let raven = `  ${runtime(process.uptime())}`
                client.sendMessage(m.chat, {
                    text: raven,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧',
                            body: 'https://github.com/HunterNick2/RAVEN-BOT',
                            thumbnailUrl: 'https://files.catbox.moe/duv8ac.jpg',
                            sourceUrl: 'https://github.com/HunterNick2/RAVEN-BOT',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break;

//========================================================================================================================//		      
  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await client.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `RAVEN-BOT`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;

//========================================================================================================================//		      
          case "mix": {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

const axios = require("axios");
if (!text) return m.reply("No emojis provided ? ")

  const emojis = text.split('+');

  if (emojis.length !== 2) {
    m.reply("Specify the emojis and separate with '+'");
    return;
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const axios = require('axios');
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
    
      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "transparent",
      });
      const stickerBuffer2 = await stickerMess.toBuffer();
      client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("Unable to create emoji mix.");
    }
  } catch (error) {
    m.reply("An error occurred while creating the emoji mix." + error );
  }
      }
	  break;

//========================================================================================================================//		      
          case "lyrics": {
		      const fetch = require('node-fetch');
 const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

    try {
        if (!text) return m.reply("Provide a song name!");

        const data = await fetchJson(apiUrl);

        if (!data.success || !data.result || !data.result.lyrics) {
            return m.reply(`Sorry, I couldn't find any lyrics for "${text}".`);
        }

        const { title, artist, link, thumb, lyrics } = data.result;

        const imageUrl = thumb || "https://i.imgur.com/Cgte666.jpeg";

        const imageBuffer = await fetch(imageUrl)
            .then(res => res.buffer())
            .catch(err => {
                console.error('Error fetching image:', err);
                return null;
            });

        if (!imageBuffer) {
            return m.reply("An error occurred while fetching the image.");
        }

        const caption = `**Title**: ${title}\n**Artist**: ${artist}\n\n${lyrics}`;

        await client.sendMessage(
            m.chat,
            {
                image: imageBuffer,
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        m.reply(`An error occurred while fetching the lyrics for "${text}".`);
    }
      }
	break;

//========================================================================================================================//		      
        case "toimg": case "photo": { 
    if (!quoted) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗮𝘃𝗲𝗻-𝗕𝗼𝘁`}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 
     break;

//========================================================================================================================//		      
   case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
                       break;
		      
//========================================================================================================================//                                   
  case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
       
//========================================================================================================================//
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted);
		
                    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated✅️`; 
	  }
    break;

//========================================================================================================================//		      
          case 'broadcast': { 
         if (!Owner) throw NotOwner; 
         if (!text) { 
             reply("Provide a message to cats!") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: menulink
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;

//========================================================================================================================//		      
 case "gemini": {
    try {
        if (!text) return m.reply("This is Raven, an AI using Gemini APIs to process text, provide yr query");
    
        const { default: Gemini } = await import('gemini-ai');

        const gemini = new Gemini("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res);
    } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
    }
 }
 break;

//========================================================================================================================//		      
        case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  
  
 break;
		      
//========================================================================================================================//	
 case "dlt": case "dil": { 
 if (!m.quoted) throw `No message quoted for deletion`; 
 let { chat, fromMe, id, isBaileys } = m.quoted; 
 if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
 client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } }); 
 } 
 break;
 
//========================================================================================================================//
case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`  
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	 if (users == "254114660061@s.whatsapp.net") return m.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
		  if (users  == client.decodeJid(client.user.id)) throw '𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡';
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!`); 
 } 
 break; 

//========================================================================================================================//		      
 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 } 
 break;

//========================================================================================================================//		      
          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             }  
               break;

//========================================================================================================================//		      
 case "enc": case "encrypte": {
	const Obf = require("javascript-obfuscator");

    // Check if the quoted message has text
    if (m.quoted && m.quoted.text) {
        const forq = m.quoted.text;

        // Obfuscate the JavaScript code
        const obfuscationResult = Obf.obfuscate(forq, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        });

        console.log("Successfully encrypted the code✅️");
        m.reply(obfuscationResult.getObfuscatedCode());
    } else {
        m.reply("Quote/Tag a valid JavaScript code to encrypt!");
    }
}
	break;

//========================================================================================================================//		      

//========================================================================================================================//		      
	      case 'gcprofile': {
 function convertTimestamp(timestamp) {
  const d = new Date(timestamp * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d),
    year: d.getFullYear(),
    day: daysOfWeek[d.getUTCDay()],
    time: `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`
  }
}

if (!m.isGroup) return m.reply("This command is meant for groups");

let info = await client.groupMetadata(m.chat);
let ts = await convertTimestamp(info.creation);

try {
        pp = await client.profilePictureUrl(chat, 'image');
      } catch {
        pp = 'https://files.catbox.moe/duv8ac.jpg';
      }

await client.sendMessage(m.chat, { image: { url: pp }, 
          caption: `_Name_ : *${info.subject}*\n\n_ID_ : *${info.id}*\n\n_Group owner_ : ${'@'+info.owner.split('@')[0]} || 'No Creator'\n\n_Group created_ : *${ts.day}, ${ts.date} ${ts.month} ${ts.year}, ${ts.time}*\n\n_Participants_ : *${info.size}*\n_Members_ : *${info.participants.filter((p) => p.admin == null).length}*\n\n_Admins_ : *${Number(info.participants.length - info.participants.filter((p) => p.admin == null).length)}*\n\n_Who can send message_ : *${info.announce == true ? 'Admins' : 'Everyone'}*\n\n_Who can edit group info_ : *${info.restrict == true ? 'Admins' : 'Everyone'}*\n\n_Who can add participants_ : *${info.memberAddMode == true ? 'Everyone' : 'Admins'}*`
        }, {quoted: m })
}
	 break;

//========================================================================================================================//		      
   case 'tovideo': case 'mp4': case 'tovid': {
			
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
                
        let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;
//========================================================================================================================//
//========================================================================================================================//        
        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Raven", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});


 
  
