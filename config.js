//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "strikerboywork@gmail.com";
global.location = "Zimbabwe, Harare";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/Devenlee350/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafbajGDuMRoRlel7k1p";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafbajGDuMRoRlel7k1p";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/OoAAyvc.jpeg";
global.devs = "https://wa.me/263784562833";
global.sudo = process.env.SUDO || "263784562833,263710444816";
global.owner = process.env.OWNER_NUMBER || "263710444816";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NpZlM3TUtMMk4ySGVvd2lmZnFtMS9PM3N5WDZPMXI3V1g4eE13aHZYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJ1WWp4ck43cTIvLzUrYi9oN1FOYWxhWTloSCszZWtoOXV2dWdTbVZUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSjUzZ2NKcnhiWnpCeHRJUGdYUytZbmgwdTVLOVhQTXdLdzU2aEJtNEZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxU1pxM1JMYkVtbXkzcXZLTWtkcy82c21UbVMwT3U4cEZDbEZlY21aMFY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNbXRoamJSNWgyWVRqL2g4UU5qR05xUThmdGwrK3FvVTlCcE5vVXAyR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJON0x2T0FQOFhicFZTWE1ibW0xQlRMQk9xNUkzNnVBdzA3VVFGdVFDbjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hxcXAzRDZ6VHkrMUxKRm5Na1M5cnk4VnNPMHovTkZrUEFwVUEyOWtWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFlnNWRQTEx1VjJZTndaczRYLytFdEtOSjhHSkswSllvS0xxU3dHZW1uZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlloKzNmUEE5MlYvNTNzV3hpK21YT0o5WGFCOUxYaUJ4a21ueUsvWlBzR3E3T1ByU1dQb20vUzdFMlUwam05czZRUWwrTUY4R1ZOeDRWUnc2UGErVkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJMVVpIcjdNRkZJNjgzNWNIK2RmQk9GZS9kaE9SMWVMd0lCbktUZTZZa2xZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwdVdWZ0FYSlJTbXhtOWJtTzc0RGlBIiwicGhvbmVJZCI6IjhkZmM1ZTRhLTQ0N2ItNGZlNy1hMzUzLWY4NTU3YzZkYjc0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBLzVPZ2xLNUdGYTNycGJUcW45d0haZjJMdUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlFpL2FXUElhR3hrdzNwNDE5dnlPbDd3SkY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBNWjJESDdIIiwibWUiOnsiaWQiOiIyNjM3MTA0NDQ4MTY6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZW38J2WjvCdlpEg8J2VvvCdlobwnZab8J2WhvCdlozwnZaKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRHErT0FFRUs2bzJyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzWmZhbXAxd3dXSkpURVdscHltZjZ3dmZuWEs4d3ozMld4b1p2ZXNjTkgwPSIsImFjY291bnRTaWduYXR1cmUiOiJQdDQ1RnlyV012WDQvUXVEMmtucGtVSjBlMWc3QUZ5c3ZmQ0I5RlB2alErNTZ0MlRUTEl5bzFldFBFNUFxc1RrYWNaSGpoVXR5a0ZSckxkekVOQi9DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWlgyT2FkKzNabkhjZXhLRDlKVHdUS2RqNHRKbE91WkdGYXNzSll0U0hxTlVkcFlFOEZtSk9TZmxzaUNHYW9PYy8xNHVJVlBtWHFsaEJIRGJ6NE93QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTA0NDQ4MTY6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkMlgycHFkY01GaVNVeEZwYWNwbitzTDM1MXl2TU05OWxzYUdiM3JIRFI5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NTMyOTg4fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ sᴛʀɪᴋᴇʀʙᴏʏ ᴡᴏʀʟᴅ ⌝☜`",
  author: process.env.PACK_AUTHER || "sᴛʀɪᴋᴇʀʙᴏʏ",
  packname: process.env.PACK_NAME || "ɴᴏᴠᴀ",
  botname: process.env.BOT_NAME || "✙ɴᴏᴠᴀ✙",
  ownername: process.env.OWNER_NAME || "⌜𝔏𝔍𝔏 𝔖𝔄𝔙𝔄𝔊𝔈⌝",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
