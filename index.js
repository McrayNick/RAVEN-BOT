/* I don't know what's this..!

        and Don't forget to say hi to your partner. */

const {
  default: ravenConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  downloadContentFromMessage,
  jidDecode,
  proto,
  getContentType,
} = require("@whiskeysockets/baileys");

const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const axios = require("axios");
const express = require("express");
const chalk = require("chalk");
const FileType = require("file-type");
const figlet = require("figlet");

const _ = require("lodash");
const PhoneNumber = require("awesome-phonenumber");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/ravenexif');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/ravenfunc');
const { sessionName, session, autobio, autolike, owner, port, packname, autoviewstatus, welcome } = require("./set.js");
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const app = express();

async function authenticationn() {
  try {
    const credsPath = "./session/creds.json";  
    // Check if session file exists
    if (!fs.existsSync(credsPath)) {
      console.log("Connecting...");
      await fs.writeFileSync(credsPath, atob(session), "utf8");
    } 
    // If session is not "zokk", update session file
    else if (session !== "zokk") {
      await fs.writeFileSync(credsPath, atob(session), "utf8");
    }
  } catch (error) {
    console.log("Session is invalid: " + error);
    return;
  }
}
  
async function startRaven() {
                 await authenticationn();  
  const { state, saveCreds } = await useMultiFileAuthState("session");
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
  console.log(
    color(
      figlet.textSync("RAVEN-AI", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "green"
    )
  );

  const client = ravenConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: ["RAVEN - AI", "Safari", "5.1.7"],
    auth: state,
    syncFullHistory: true,
  });

  if (autobio === 'TRUE') {
    setInterval(() => {
      const date = new Date();
      client.updateProfileStatus(
        `${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.`
      );
    }, 10 * 1000);
  }

  store.bind(client.ev);

  client.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      let mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;

      if (autoviewstatus === 'TRUE' && autolike === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {
        const nickk = await client.decodeJid(client.user.id);
        await client.sendMessage(mek.key.remoteJid, { react: { key: mek.key, text: '🎭' } }, { statusJidList: [mek.key.participant, nickk] });
      }

      if (autoviewstatus === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {
        client.readMessages([mek.key]);
      }

      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;

      let m = smsg(client, mek, store);
      const raven = require("./raven");
      raven(client, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  // Handle error
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });

  // Setting
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };

  client.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = client.decodeJid(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });

  client.getName = (jid, withoutContact = false) => {
    let id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === client.decodeJid(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.setStatus = (status) => {
    client.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  client.public = true;

  client.serializeM = (m) => smsg(client, m, store);
  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startRaven();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startRaven();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Session_id and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startRaven();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startRaven();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startRaven();
      }
    } else if (connection === "open") {
      await client.groupAcceptInvite("DefN96lXQ4i5iO1wDDeu2C");
      console.log(color("Congrats, RAVEN-BOT has successfully connected to this server", "green"));
      console.log(color("Follow me on Instagram as Nick_hunter9", "red"));
      console.log(color("Text the bot number with menu to check my command list"));
      client.sendMessage(client.user.id, { text: `𝗕𝗼𝘁 𝗵𝗮𝘀 𝗦𝘁𝗮𝗿𝘁𝗲𝗱 » » »【𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧】 ` });
    }
  });

  client.ev.on("creds.update", saveCreds);
 const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };

  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };

        const _0x3b4c1b = _0x5503;
function _0x5503(_0x4474ab, _0x54cbe2) {
    const _0x2e6b6a = _0x2be2();
    return _0x5503 = function (_0x10c4b6, _0x147cc9) {
        _0x10c4b6 = _0x10c4b6 - (0x1c60 + -0x16 * 0x28 + -0xc46 * 0x2);
        let _0x3f047c = _0x2e6b6a[_0x10c4b6];
        return _0x3f047c;
    }, _0x5503(_0x4474ab, _0x54cbe2);
}
function _0x2be2() {
    const _0x29376d = [
        '10ZFyleu',
        'nter9\x0aitem3',
        'TEL;waid=',
        'D\x0aVERSION:',
        '3.0\x0aN:\x20RA',
        ';;\x0aitem4.X',
        'N:RAVEN\x20',
        'push',
        '\x0aitem1.X-A',
        'sendContac',
        '7586551AEUIZc',
        'VCARD',
        'cky50@gma',
        'EMAIL;type',
        '11389587NuVstv',
        '300FhlJEa',
        'VEN\x20DEV\x0aF',
        'ber\x0aitem2.',
        'il.com\x0aite',
        '-ABLabel:R',
        '6KYfMMX',
        '193102jqofVL',
        '\x0aitem4.ADR',
        'el:Email\x0ai',
        'BLabel:Num',
        '8QAmyyx',
        'tem3.URL:h',
        '94474Kyxmeh',
        '3OBHvGl',
        'tagram.com',
        'egion\x0aEND:',
        ':Instagram',
        '555014OZNQzU',
        '3100329laiMJQ',
        '=INTERNET:',
        'm2.X-ABLab',
        'dicksonni',
        'DEV\x0aitem1.',
        'iOIPi',
        '.X-ABLabel',
        '19670KFpPkS',
        '/nick_hu',
        '412lesMsv',
        ':;;Kenya;;',
        'ttps://ins',
        'sendMessag',
        'RAVEN\x20DE',
        'BEGIN:VCAR'
    ];
    _0x2be2 = function () {
        return _0x29376d;
    };
    return _0x2be2();
}
(function (_0xb3521d, _0x38c76a) {
    const _0x357db4 = _0x5503, _0x9a71d8 = _0xb3521d();
    while (!![]) {
        try {
            const _0x5e78a3 = parseInt(_0x357db4(0x78)) / (-0xb1b * 0x3 + 0x1 * 0x1337 + 0xe1b) + parseInt(_0x357db4(0x7d)) / (0x1 * -0x1f66 + 0x1255 + 0xd13) * (parseInt(_0x357db4(0x79)) / (-0x2456 * -0x1 + -0xc4 * -0x22 + -0x3e5b * 0x1)) + parseInt(_0x357db4(0x87)) / (0x11f8 + -0xabf + -0x735) * (-parseInt(_0x357db4(0x85)) / (-0x1a47 + 0x155 * 0x14 + -0x4 * 0x16)) + parseInt(_0x357db4(0x71)) / (-0x17eb + 0xf08 + 0x8e9 * 0x1) * (-parseInt(_0x357db4(0x67)) / (0x1 * 0x12f7 + -0x2373 + 0x1083 * 0x1)) + parseInt(_0x357db4(0x76)) / (0x7b2 + 0x33 * -0xb2 + 0x6 * 0x4a2) * (parseInt(_0x357db4(0x7e)) / (0x495 + -0xfb * -0x7 + -0xb69)) + -parseInt(_0x357db4(0x8d)) / (-0x1 * 0x681 + -0x3 * -0x3b + 0x5da * 0x1) * (-parseInt(_0x357db4(0x6b)) / (-0x1584 * -0x1 + -0x2 * -0x6d3 + -0x231f)) + -parseInt(_0x357db4(0x6c)) / (-0x15 * 0x1b8 + 0x1584 + 0x18 * 0x9c) * (-parseInt(_0x357db4(0x72)) / (0x186a + 0x1 * -0x97a + -0xee3));
            if (_0x5e78a3 === _0x38c76a)
                break;
            else
                _0x9a71d8['push'](_0x9a71d8['shift']());
        } catch (_0x4d295a) {
            _0x9a71d8['push'](_0x9a71d8['shift']());
        }
    }
}(_0x2be2, -0x2 * 0x2659c + -0xc5af * -0x11 + 0x1 * 0x15813), client[_0x3b4c1b(0x66) + 't'] = async (_0x338d86, _0x412968, _0x338a16 = '', _0x3631cf = {}) => {
    const _0x231199 = _0x3b4c1b, _0x21848d = { 'iOIPi': _0x231199(0x8b) + 'V' };
    let _0x1ceaa7 = [];
    for (let _0x2e4e25 of _0x412968) {
        _0x1ceaa7[_0x231199(0x64)]({
            'displayName': _0x21848d[_0x231199(0x83)],
            'vcard': _0x231199(0x8c) + _0x231199(0x90) + _0x231199(0x91) + _0x231199(0x6d) + _0x231199(0x93) + _0x231199(0x82) + _0x231199(0x8f) + _0x2e4e25 + ':' + _0x2e4e25 + (_0x231199(0x65) + _0x231199(0x75) + _0x231199(0x6e) + _0x231199(0x6a) + _0x231199(0x7f) + _0x231199(0x81) + _0x231199(0x69) + _0x231199(0x6f) + _0x231199(0x80) + _0x231199(0x74) + _0x231199(0x77) + _0x231199(0x89) + _0x231199(0x7a) + _0x231199(0x86) + _0x231199(0x8e) + _0x231199(0x84) + _0x231199(0x7c) + _0x231199(0x73) + _0x231199(0x88) + _0x231199(0x92) + _0x231199(0x70) + _0x231199(0x7b) + _0x231199(0x68))
        });
    }
    client[_0x231199(0x8a) + 'e'](_0x338d86, {
        'contacts': {
            'displayName': _0x231199(0x8b) + 'V',
            'contacts': _0x1ceaa7
        },
        ..._0x3631cf
    }, { 'quoted': _0x338a16 });
});
        
  client.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
    let types = await client.getFile(PATH, true);
    let { filename, size, ext, mime, data } = types;
    let type = '', mimetype = mime, pathFile = filename;
    if (options.asDocument) type = 'document';
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require('./lib/ravenexif.js');
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, { packname: packname, author: packname, categories: options.categories ? options.categories : [] });
      await fs.promises.unlink(filename);
      type = 'sticker';
      mimetype = 'image/webp';
    } else if (/image/.test(mime)) type = 'image';
    else if (/video/.test(mime)) type = 'video';
    else if (/audio/.test(mime)) type = 'audio';
    else type = 'document';
    await client.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options });
    return fs.promises.unlink(pathFile);
  };

  client.parseMention = async (text) => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
  };

  client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
    return buffer;
  };

  client.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client;
}

app.use(express.static("pixel"));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));

startRaven();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
