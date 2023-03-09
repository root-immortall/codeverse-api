const fetch = require("node-fetch");
const cheerio = require("cheerio");

openaigallery = async (text) => {
  codenm = await fetch(`https://api.immortall.my.id/api/openai/gallery?apikey=codename&text=${text}`)
  result = codenm.result
  return result;
};
openaitext = async (text) => {
  codenm = await fetch(`https://api.immortall.my.id/api/openai?apikey=codename&text=${text}`)
  result = { status: codenm.status, creator: "denpa", result: codenm.result };
  return result;
};

module.exports = openaitext, openaigallery