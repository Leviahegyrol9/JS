const names = ["Pisti", "Jani", "Csenge"];

names.forEach((n) => {
    console.log(n);
})

const filter = names.filter((n) => n.length > 4)

console.log(filter);

const search = names.find((n) => n.length > 4 && n.length < 10)

console.log(search);