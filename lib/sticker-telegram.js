const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");
const fetch = require("node-fetch");
const cookie = require("cookie");
const FormData = require("form-data");
const exec = require("child_process").exec;
const os = require("os");

module.exports = async function telestick(url) {
return new Promise(async (resolve, reject) => {
packName = url.replace("https://t.me/addstickers/", "")
data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
const hasil = []
for (let i = 0; i < data.data.result.stickers.length; i++) {
fileId = data.data.result.stickers[i].thumb.file_id
data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
result = {
status: 200,
author: `denpa`,
url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
}
hasil.push(result)
}
resolve(hasil)
})
}