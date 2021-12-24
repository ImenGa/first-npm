var fs= require('fs');

function writeData(data) {
    fs.writeFileSync("data.json", JSON.stringify(data));

}
module.exports = writeData