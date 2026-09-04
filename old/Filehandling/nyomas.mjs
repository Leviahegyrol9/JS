import fs from "fs"
import input from 

let content = fs.readFileSync("nyomas.txt", {encoding: "utf8"})
const arr = content.split(",").map(e => parseInt(e))

console.log(arr.find(e => Math.min(arr)))

let csokkenes = 0
for (let i = 0; i < arr.length-1;i++){
    
}