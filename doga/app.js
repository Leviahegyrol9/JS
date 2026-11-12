import express from "express";
import * as db from "./data/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/equipment/:id", (req, res) => {
  const sport = db.getSportsById(req.params.id);

  if (!sport) return res.status(404).json({ message: "Equipment not found." });

  res.status(200).json(sport);
});

app.get("/api/equipment/category/:category", (req, res) => {
  const sport = db.getSportsByCategory(req.params.category);

  if (!sport) return res.status(404).json({ message: "Equipment not found." });

  res.status(200).json(sport);
});

app.put("/api/equipment/:id", (req, res) => {
  const id = req.params.id;
  const sport = db.getSportsById(id);

  if (!sport) return res.status(404).json({ message: "Equipment not found." });

  const { name, category, brand, price, quantity } = req.body;

  if (
    !name ||
    !category ||
    !brand ||
    !price ||
    price < 0 ||
    !quantity ||
    quantity <= 0
  )
    return res.status(400).json({ message: "Wrong datas." });

  sport.name = name;
  sport.category = category;
  sport.brand = brand;
  sport.price = price;
  sport.quantity = quantity;

  db.updateSport(name, category, brand, price, quantity, id);

  res.status(200).json(sport);
});

app.delete("/api/equipment/:id", (req, res) => {
  const id = req.params.id;
  const sport = db.getSportsById(id);

  if (!sport) return res.status(404).json({ message: "Equipment not found." });

  db.deleteSport(id);

  res.status(200).json({ message: "Equipment successfully deleted." });
});

app.listen(PORT, () => console.log("Server runs"));
