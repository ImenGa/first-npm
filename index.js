var getSongs = require("./getsongs");
var writeData = require("./writedata"); 

console.log("Hello world");


async function main(){
    try{
        console.log("loading song list...")
        let a = await getSongs("Hello");
        console.log(a)
        console.log("writing into data.json")
       writeData(a);
    }catch(e){

    }
}
main();
