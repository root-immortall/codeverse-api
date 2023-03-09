const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");
const fetch = require("node-fetch");
const cookie = require("cookie");
const FormData = require("form-data");
const exec = require("child_process").exec;
const os = require("os");

// Mcpedl Search
module.exports = async function mcpedl(query) {
return new Promise((resolve, reject) => {
axios.get(`https://mcpedl.com/?s=${query}`).then(async xzons => {
const $ = cheerio.load(xzons.data)

hasil = []

$("div.post").each(function(c, d) {
  
name = $(d).find("h2.post__title").text().trim();
date = $(d).find("div.post__date").text().trim();
desc = $(d).find("p.post__text").text().trim();
category = $(d).find("div.post__category > a").text().trim();
link = $(d).find("a").attr('href')
link2 = `https://mcpedl.com${link}`
const Data = {
author: `denpa`,
name: name,
category: category,
date: date,
desc: desc,
link: link2
}
hasil.push(Data)

})
 resolve(hasil)
}).catch(reject)
});
}