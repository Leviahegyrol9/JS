const end = 3;
var sum = 0;
var marks = [];

for (let i = 1; i <= end; i++) {
    marks.push(Math.floor(Math.random() * 5) + 1);
}

console.log("Jegyek:\n");

for (let mark of marks) {
    console.log(mark);
    sum += mark;
}

const average = sum / end;

console.log(`A jegyek átlaga: ${average.toFixed(2)}\n`);

if (average >= 4.0) {
    console.log("A hallgato osztondijra jogosult!");
} else {
    console.log("A hallgato nem jogosult osztondijra!");
}
