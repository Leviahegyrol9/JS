var line = "";

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        line += `${i * j}\t`;
    }
    console.log(line)
    line = "";
}