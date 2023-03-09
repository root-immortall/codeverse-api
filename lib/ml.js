/**
 * Get Username Mobile Legend From ID And Zone
 * @param {string} number ID Mobile Legend
 * @param {string} number Zone Mobile Legend
 * @return {Promise<string>} Mobile Legend Username Finder
 */
 
const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");
const fetch = require("node-fetch");
const cookie = require("cookie");

module.exports = async function mlnick(id, zoneId) {
return new Promise(async (resolve, reject) => {
axios
.post(
'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
new URLSearchParams(
Object.entries({
productId: '1',
itemId: '2',
catalogId: '57',
paymentId: '352',
gameId: id,
zoneId: zoneId,
product_ref: 'REG',
product_ref_denom: 'AE',
})
),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Referer: 'https://www.duniagames.co.id/',
Accept: 'application/json',
},
}
)
.then((response) => {
resolve(response.data.data.gameDetail)
})
.catch((err) => {
reject(err)
})
})
}