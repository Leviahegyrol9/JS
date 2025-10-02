function getOtosLotteryNumbers(){
    const lottery = [];

    for (let i = 1; i <= 5;i++){
        var rnd = Math.floor(Math.random() * 90) + 1;
        lottery.push(rnd);
    }

    return lottery;
}

function getSortedtLotteryNumbers(array){
    
}

console.log(getOtosLotteryNumbers());
console.log(getOtosLotteryNumbers().sort((a,b) => a - b));