import express from "express";
import cors from "cors";
import bycrypt from "bcrypt";
import * as db from "./databases/db.js";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/bikes", (req, res) => {
  const bikes = db.getAllBikes();
  if (!bikes.length) return res.status(404).json({ message: "No bikes found" });
  res.status(200).json(bikes);
});

app.get("/api/bikes/:id", (req, res) => {
  const bike = db.getBikeById(req.params.id);

  if (!bike) return res.status(404).json({ message: "Bike not found" });

  res.status(200).json(bike);
});

app.post("/api/bikes", (req, res) => {
  const {
    brand,
    model,
    year,
    displacement,
    power,
    owner,
    category,
    topSpeed,
    price,
    description,
    image,
    userId,
  } = req.body;

  if (!brand || !model || !category || !owner || !userId)
    return res.status(400).json({
      message: "Brand, model, category, owner and userId are required",
    });

  const numbers = { year, displacement, power, topSpeed, price };
  for (const [key, value] of Object.entries(numbers)) {
    if (
      value === undefined ||
      value === "" ||
      !Number.isFinite(Number(value)) ||
      Number(value) < 0
    )
      return res.status(400).json({ message: `Invalid value for ${key}` });
  }

  const result = db.createBike({
    brand,
    model,
    year: Number(year),
    displacement: Number(displacement),
    power: Number(power),
    owner,
    category,
    topSpeed: Number(topSpeed),
    price: Number(price),
    description: description ?? "",
    image: image ?? "",
    userId: Number(userId),
  });

  res.status(201).json(db.getBikeById(result.lastInsertRowid));
});

app.put("/api/bikes/:id", (req, res) => {
  const bike = db.getBikeById(req.params.id);
  if (!bike) return res.status(404).json({ message: "Bike not found" });

  const { brand, model, year, displacement, power, category, topSpeed, price } =
    req.body;
  if (!brand || !model || !category)
    return res
      .status(400)
      .json({ message: "Brand, model and category are required" });

  const numbers = { year, displacement, power, topSpeed, price };
  for (const [key, value] of Object.entries(numbers)) {
    if (!Number.isFinite(Number(value)) || Number(value) < 0)
      return res.status(400).json({ message: `Invalid value for ${key}` });
  }

  db.updateBike(bike.id, { ...bike, ...req.body });
  res.status(200).json(db.getBikeById(bike.id));
});

app.delete("/api/bikes/:id", (req, res) => {
  const bike = db.getBikeById(req.params.id);

  if (!bike) return res.status(404).json({ message: "Bike not found" });

  db.deleteBike(bike.id);
  res.status(200).json({ message: "Bike deleted successfully" });
});

app.post("/api/reset", (req, res) => {
  const count = db.resetBikes();
  res.json({ message: "Adatbázis visszaállítva", count });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = db.findUser(email);
  if (!user || !(await bycrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.status(200).json({
    message: "Login successful",
    user: { ...db.findUser(email), password: undefined },
  });
});

app.post("/api/registration", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password and name are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (db.findUser(email)) {
    return res.status(409).json({ message: "User already exists" });
  }

  db.createUser(name, email, await bycrypt.hash(password, 10));

  res.status(201).json({
    message: "Registration successful",
    user: { ...db.findUser(email), password: undefined },
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
