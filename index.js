/**
 * codeverse-api
 * @module codeverse-api
 */
 
const { version } = require("./package.json");
const binary = require("./lib/binary");
const iplookup = require("./lib/iplook");
const artinama = require("./lib/artinama");
const stress = require("./lib/stress");
const cuaca = require("./lib/cuaca");
const youtube = require("./lib/youtube");
const fakeua = require("./lib/fakeua");
const tiktok2 = require("./lib/tiktok2");
const tiktok = require("./lib/tiktok");
const igstalk = require("./lib/igstalk");
const gtts = require("./lib/gtts.js");
const carigrup = require("./lib/grupwa");
const happymod = require("./lib/happymod");
const kusonime = require("./lib/kusonime");
const emojimix = require("./lib/emojimix");
const translate = require("./lib/translate");
const rangkum = require("./lib/rangkum");
const film = require("./lib/film");
const openaitext = require('./lib/openai');
const openaigallery = require('./lib/openai');
const wallpapercave = require("./lib/wallpapercave");
const family100 = require("./src/game/family100");
const soundcloud = require("./lib/soundcloud");
const whois = require("./src/tools/whois");
const getHeaders = require("./src/tools/headers");
const shortlink = require("./src/tools/shortlink");
const uploadFile = require("./src/tools/uploadFile");
const uploadFile2 = require("./src/tools/uploadFile2");
const minifyjs = require("./src/tools/minifyjs");
const siapakahaku = require("./src/game/siapakahaku");
const EncryptHTML = require("./src/tools/enc-html");
const isporn = require("./src/tools/is-porn");
const persamaankata = require("./lib/persamaankata");
const singkatankata = require("./lib/singkatankata");
const quran = require("./lib/alquran");
const instagram = require("./lib/instagram");
const freefireid = require("./lib/freefireid");
const mlnick = require("./lib/ml");
const mcpedl = require("./lib/mcpe");
const telestick = require("./lib/sticker-telegram");
const stickersc = require("./lib/sticker-search");
const wall_alphacoders = require("./lib/wall.alphacoders.js");
const quotesanime = require("./lib/random/quotesanime");
const mediafire = require("./lib/mediafire");
const ttstalk = require("./lib/ttstalk");
const urlexpand = require("./lib/urlexpand");
const zippyshare = require("./lib/zippyshare");
const gempa = require("./lib/infogempa");
const pindl = require("./lib/pindl");
const pin = require("./lib/pinsrch");
const soundcloud2 = require("./lib/soundcloudsearch");
const textpro = require("./lib/textpro");
const sfile = require("./lib/sfile");
const chordlagu = require("./lib/chordlagu");
const subfinder = require("./src/tools/subfinder");
const tiklydown = require("./lib/tiklydown");
const Lick = require('./src/linz/Lick');
const Burn = require('./src/linz/Burn');
const Rank = require('./src/rank/Rank');
const Hacker1 = require('./src/linz/Hacker1');
const Hacker2 = require('./src/linz/Hacker2');
const Hacker3 = require('./src/linz/Hacker3');
const Patrick = require('./src/linz/Patrick');
const Signup = require('./src/update/Signup');
const Up = require('./src/premium/Up');
const Ig = require('./src/update/Ig');
const Inv = require('./src/update/Inv');
const Base = require('./src/greetings/Base');
const Promote = require('./src/greetings/Promote');
const Demote = require('./src/greetings/Demote');
const Verification = require('./src/greetings/Verification');
const Goodbye = require('./src/greetings/Goodbye');
const Goodbye2 = require('./src/greetings2/Goodbye2');
const Goodbye3 = require('./src/greetings3/Goodbye3');
const Welcome = require('./src/greetings/Welcome');
const Welcome2 = require('./src/greetings2/Welcome2');
const Welcome3 = require('./src/greetings3/Welcome3');
const Gura = require('./src/gfx/Gura');
const Gfx1 = require('./src/gfx/Gfx1');
const Gfx2 = require('./src/gfx/Gfx2');
const Gfx3 = require('./src/gfx/Gfx3');
const Gfx4 = require('./src/gfx/Gfx4');
const Gfx5 = require('./src/gfx/Gfx5');
const customGfx = require('./src/gfx/gfxcustom')
const customGfx2 = require('./src/gfx/gfxCustom2')
const Bag = require('./src/premium/Bag');
const Stat = require('./src/premium/Stat');
const Xnxx = require('./src/premium/Xnxx');
const Canvas = require("canvas");

/**
 * Canvas
 * Register Bold font
 * Register SketchMatch font
 * Register LuckiestGuy font
 * Register KeepCalm font
 * Register CubestMedium font
 * Register Unitalic font
 * Register Built font
 * Register Beam font
 * Register Brush font
*/

Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
Canvas.registerFont(`${__dirname}/assets/fonts/CubestMedium.otf`, { family: "CubestMedium" });
Canvas.registerFont(`${__dirname}/assets/fonts/Uni-Italic.ttf`, { family: "Unitalic" });
Canvas.registerFont(`${__dirname}/assets/fonts/Bult.ttf`, { family: "Built" });
Canvas.registerFont(`${__dirname}/assets/fonts/beamweaponital.ttf`, { family: "BeamweaponItal" });
Canvas.registerFont(`${__dirname}/assets/fonts/BrushKing.otf`, { family: "brush" });


/**
 * Feature
*/

module.exports = {
  version: {
   version,
  },
  info: {
    gempa,
  },
  encrypt: {
    binary,
  },
  downloader: {
    yt: youtube,
    tiktok,
    tiktok2,
    soundcloud,
    instagram,
    mediafire,
    zippyshare,
    pindl,
    tiklydown,
  },
  canvas: {
    Lick,
    Burn,
    Rank,
    Hacker1,
    Hacker2,
    Hacker3,
    Patrick,
    Signup,
    Up,
    Ig,
    Inv,
    Base,
    Gura,
    Bag,
    Stat,
    Xnxx,
  },
  canvas2: {
    Gfx1,
    Gfx2,
    Gfx3,
    Gfx4,
    Gfx5,
    customGfx,
    customGfx2,
    Promote,
    Demote,
    Verification,
    Goodbye,
    Goodbye2,
    Goodbye3,
    Welcome,
    Welcome2,
    Welcome3,
  },
  search: {
    happymod,
    carigrup,
    kusonime,
    iplookup,
    cuaca,
    artinama,
    igstalk,
    cuaca,
    film,
    wallpapercave,
    singkatankata,
    persamaankata,
    quran,
    freefireid,
    mlid: mlnick,
    wall_alphacoders,
    ttstalk,
    pin,
    stickersearch: stickersc,
    telegramsticker: telestick,
    soundcloud: soundcloud2,
    sfile,
    chordlagu,
  },
  random: {
    fakeua,
    quotesanime,
  },
  other: {
    emojimix,
    translate,
    rangkum,
    stress,
  },
  tools: {
    whois,
    getHeaders,
    shortlink,
    uploadFile,
    uploadFile2,
    minifyjs,
    EncryptHTML,
    expandurl: urlexpand,
    openaitext: openaitext,
    openaigallery,
    isporn,
    textpro,
    subfinder,
    gtts,
  },
  game: {
    family100,
    siapakahaku,
  },
};
