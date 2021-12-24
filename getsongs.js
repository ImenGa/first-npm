var axios = require("axios");

async function getSongs(name) {
  let resp = await axios.get(`https://itunes.apple.com/search?term=${name}`);
  let data = resp.data;

  return data;
}
module.exports = getSongs; //permet au fichier d'etre utile dans le reste des fichier (utilisable)
