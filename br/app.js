const express = require("express");

const app = express();

const persons = [
  {
    "id" : 1,
    "name" : "Zsolt",
    "age" : 56,
    "gender" : "male",
    "kids" : [2,3]
  },
  {
    "id" : 2,
    "name" : "Béla",
    "age" : 26,
    "gender" : "male",
    "kids" : null
  },
  {
    "id" : 3,
    "name" : "Anna",
    "age" : 16,
    "gender" : "female",
    "kids" : null
  },
  {
    "id" : 4,
    "name" : "Géza",
    "age" : 76,
    "gender" : "male",
    "kids" : [1]
  }
]

app.get("/persons", (req, res) =>{
    res.json(persons);
})

app.get("/persons/:id", (req, res) =>{
    const person = persons.find(p => p.id == req.params.id);

    if (!person) return res.json({message: "Nincs ilyen ember!"})

    res.json(person);
})

app.get("/persons/kids/:id", (req, res) =>{
    const kids = persons.find(p => p.id == req.params.id).kids;
    const names = [];

    if (!kids) return res.json({message: "Nincsenek gyerekek!"})

    kids.forEach((id) =>{
        names.push(persons.find(p => p.id == id).name)
    })

    res.json(names)
})

app.listen(3000, () =>{
    console.log("Server runs on http://localhost:3000");
})