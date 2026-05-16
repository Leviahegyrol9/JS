import express from "express";
import * as db from "./db.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/foods", async (req, res) => {
    const foods = await db.getMenu();

    res.status(200).json(foods);
});

app.get("/foods/:id", async (req, res) => {
    const food = await db.getFoodById(+req.params.id);

    if (!food) {
        return res.status(404).json({ error: "Az étel nem található" });
    }

    res.status(200).json(food);
});

app.post("/foods", async (req, res) => {
    const { name, price, weight } = req.body;

    if (!name || !price || !weight) {
        return res.status(400).json({ error: "Minden mező kitöltése kötelező" });
    }

    await db.addFood(name, price, weight);

    res.status(201).json({ message: "Az étel hozzáadva" });
});

app.put("/foods/:id", async (req, res) => {
    const food = await db.getFoodById(+req.params.id);

    if (!food) {
        return res.status(404).json({ error: "Az étel nem található" });
    }
    const { name, price, weight } = req.body;

    if (!name || !price || !weight) {
        return res.status(400).json({ error: "Minden mező kitöltése kötelező" });
    }

    food.name = name;
    food.price = price;
    food.weight = weight;

    await db.modifyFood(food.id, food.name, food.price, food.weight);

    res.status(200).json({ message: "Az étel módosítva" });
});

app.delete("/foods/:id", async (req, res) => {
    const food = await db.getFoodById(+req.params.id);

    if (!food) {
        return res.status(404).json({ error: "Az étel nem található" });
    }

    await db.deleteFood(food.id);

    res.status(200).json({ message: "Az étel törölve" });
});

app.listen(PORT, () => {
    console.log(`Server fut a ${PORT} porton`);
});