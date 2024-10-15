const persons = [
    {nev: "Levente", kor: 25},
    {nev: "Laci", kor: 16},
];

const under18 = persons.find((n) => n.kor >= 18);
console.log(under18);

const under18f = persons.filter((n) => n.kor >= 18);
console.log(under18f);

console.log("\nNevek:\n");

persons.forEach((n) => {
    console.log(n.nev);
})