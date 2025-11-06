import input from "../Package/input.js"
const howMany = await input("Hány adatot szeretnél megadni?\n");
const people = [];

for(let i = 0; i < parseInt(howMany); i++){
    let person = 
    {
        Name: await input("Név: "),
        Email: await input("E-mail: ")
    }

    people.push(person)
}

people.forEach(element => {
    console.log(`Név: ${element.Name}\nE-mail: ${element.Email}`)
});