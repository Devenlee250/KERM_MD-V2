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
global.sudo = process.env.SUDO || "263784562833";
global.owner = process.env.OWNER_NUMBER || "263784562833";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhDY1VXTzFSb1dBdW9UN3BzQ09FZ1BxR1VnS0VQUFAzTUp6MWhYbUtYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlJNmh5MDV1WmZ5T2d1N0EzNGxKcWtJSHhRMldWTWxYZWx1SFBzcFgwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSDQ4L295enM5bUpmNUtSRXZmVnVFbVRWckFUbUtWRWh2MEVUZDRCMkZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVEMrWUdOeTY2b0piZ0tnME4yRk9YUm5IVFBycXJsNlhrM3RBbXlCWUdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLdHRBRHk4c2ZobWZSTVRWUkcyU24zbHJHbVdVUjdxVW9tYXJEOCtsMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllvWEV6c1hxSHVHUGMwZVVVU3REMDZmRlBEOW53MFhxdFVvd1NkRmZ0aVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpuSnVXS2dsNFAvNkNTRmNleFVDL1BlYytUU0ExQWtITjlwdkRyU0lHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3JuUjhzNk5Fd0JTK0E3cjNsZ3JjclF3bWdHUzU0L1lyZVhXS0dRZkhTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNaZCtWMzB2V3liZHBaUkszdzhYa2VTMUJ3RzlLYzNyUGd6OHorYTc2VndpZHlPNWF6U2puTkFvbE5iWE9uN21kbHhqMFNvK2ZnQVZEQ1pLNi9LWUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJ1UVg5QnVrTjZ2NGlHbW16WEdMVEhWQTdDdHdvR3c1YmxHVGRvOTIvcytzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtTDc0eGhMQ1FlMk96SndDQzI3TDVBIiwicGhvbmVJZCI6ImUyM2ZkNWFkLWYwOGQtNGRhMi05MWMwLWEzN2NkYzc3YWIxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYb3RLVFdFRE5PRDJobC9nQzFxRTNoVnJrSmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUUvQ0JSN2tSR3hnRkxDQnI5SWIrLzkzanlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNZSlo2MllTIiwibWUiOnsiaWQiOiIyNjM3ODQ1NjI4MzM6NTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tHajEwZ1FvS1dodUFZWUV5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJuRDA0S0s5ZmRSa2dXVGlUS2c4aWw3dFNESVpFNTYveXBJd3BuOGhzaDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik85b1hZQUkzRW5lRWNwQ3NaREpKdGUzSWx5N21zUlRvSENkWnZrMlNvT1pHL1Jka0V4YUpKcmIwQVcyeFlFa1ZjVUNvSmJJS3oyZFhFWUtZNVpNMkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxVWVObXBKdWRMbmpMU2VLaXdKMnVpc24vRDRuM2t0ZU1BcU9mRkZBdkt4UWRXRmlKakY1azA2TTFzVjVWUTNlYk5ZS2V3NTlOTmpaeURGWkh1MTNCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NDU2MjgzMzo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhNXc5T0NpdlgzVVpJRms0a3lvUElwZTdVZ3lHUk9ldjhxU01LWi9JYklkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTk4NzAyfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ sᴛʀɪᴋᴇʀʙᴏʏ ᴡᴏʀʟᴅ ⌝☜`",
  author: process.env.PACK_AUTHER || "sᴛʀɪᴋᴇʀʙᴏʏ",
  packname: process.env.PACK_NAME || "ɴᴏᴠᴀ",
  botname: process.env.BOT_NAME || "✙ɴᴏᴠᴀ✙",
  ownername: process.env.OWNER_NAME || "⌜sᴛʀɪᴋᴇʀʙᴏʏ⌝",
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
  LANG: (process.env.THEME || "WHATSAPP").toUpperCase(),
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
