import os from "os"
import fs from "fs"

// console.log(os.homedir())
// console.log(os.platform())

let content = fs.readFileSync("focistak.txt", {encoding:"UTF-8"})
console.log(content)

// content += "\nRonaldo 1024 Al-Nasr"
// fs.writeFileSync("focistak.txt", content)
// fs.writeFileSync("focistak.txt", "\nPuskas 127 MTK", {flag: "a+"})
// fs.mkdirSync("pelda")
// if(fs.existsSync("focista.txt")){
//     fs.writeFileSync("abc.txt". content, {encoding:"utf-8"})
// }
// else{
//     console.log("A fájl nem létezik")
// }
fs.rmdirSync("pelda")