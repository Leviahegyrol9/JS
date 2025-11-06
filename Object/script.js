const person = {
    name: "Alice",
    age: 19,
    city: "Szeged",
    driverLicence: true
}

console.log(person.name)
console.log(person["age"])

person.greet = function(){
    console.log(`Hello ${this.name}`)
}

const person2 = {
    name: "Bob",
    age: 20,
    city: "Miskolc",
    driverLicence: false,
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

person.greet();