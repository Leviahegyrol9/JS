const start = 42;
const end = 100;

var sum = 0;

for (i = start; i <= end; i++){
    if (i % 2 === 0){
        sum += i;
    }
}

console.log(`A(z) [${start}; ${end}] intervallumba eso paros szamok osszege: ${sum}`)