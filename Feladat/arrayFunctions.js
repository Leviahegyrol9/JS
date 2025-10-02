function getOtosLotteryNumbers(){
    let lottery = [];

    for (let i = 1; i <= 5;i++){
        let rnd = Math.floor(Math.random() * 90) + 1;
        lottery.push(rnd);
    }

    return lottery;
}

function getSortedtLotteryNumbers(array){
    return array.sort((a,b) => a - b);
}

function getNumberOfHits(lottery, hits){
    let counter = 0;

    hits.forEach((number) => {
        if (lottery.find(n => n == number)){
            counter++;
        }
    });

    return counter;
}

function getMonthlyLotteryArrayNumbers(){
    let array = [];

    for (let i = 1; i <= 4;i++){
        array.push(getOtosLotteryNumbers());
    }

    return array;
}

const lottery = getOtosLotteryNumbers();
const hits = getOtosLotteryNumbers();
const counter = getNumberOfHits(lottery, hits)
const month4 = getMonthlyLotteryArrayNumbers();
console.log(lottery);
console.log(hits);
console.log(counter);
console.log(month4);
