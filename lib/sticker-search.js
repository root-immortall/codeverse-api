// Sticker Search
const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");
const fetch = require("node-fetch");
const cookie = require("cookie");
const FormData = require("form-data");
const exec = require("child_process").exec;
const os = require("os");

module.exports = async function stickersc(query) {
return new Promise((resolve, reject) => {
axios.get(`https://getstickerpack.com/stickers?query=${query}`)
.then(({
data
}) => {
const $ = cheerio.load(data)
const source = [];
const link = [];
$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
source.push($(b).attr('href'))
})
axios.get(source[Math.floor(Math.random() * source.length)])
.then(({
data
}) => {
const $$ = cheerio.load(data)
$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
link.push($$(d).attr('src').replace(/&d=200x200/g,''))
})
result = {
status: 200,
author: `denpa`,
title: $$('#intro > div > div > h1').text(),
sticker_url: link
}
resolve(result)
})
}).catch(reject)
})
}