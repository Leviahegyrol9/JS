import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

const persons = [
    {
        name: "Csaba",
        age: "18"
    },
    {
        name: "Szivi",
        age: "19"
    },
    {
        name: "Szekeres",
        age: "12"
    }
].map((person, index) => ({
    id: index,
    ...person
}));

app.get("/", (req, res) => {
    let text = "";
    persons.forEach((person) => {
       text += `<p><b>Név:</b> ${person.name} <b>Kor:</b> ${person.age} <b>Id:</b> ${person.id}<p><br/>`;
    })

    res.send(text);
});

app.get("/:id", (req, res) => {
    const person = persons.find(p => p.id == +req.params.id);

    if (!person) return res.send(`Nincs ${req.params.id} idvel ember!`);

    let text = `<p><b>Név:</b> ${person.name} <b>Kor:</b> ${person.age} <b>Id:</b> ${person.id}<p><br/>`;

    res.send(text);
});


app.listen(PORT, () => console.log(`Server runs on port http://localhost:${PORT}`));
