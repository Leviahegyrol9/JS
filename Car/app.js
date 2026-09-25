import express from "express";
import * as db from "./data/db.js";

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/api/cars/brand/:brand", (req, res) => {
  const cars = db.getCarsByBrand(req.params.brand);

  if (!cars)
    return res.status(404).json({ message: "No cars found for this brand" });

  res.status(200).json(cars);
});

app.get("/api/cars/year/:year", (req, res) => {
  const cars = db.getCarsByYear(req.params.year);

  if (!cars)
    return res.status(404).json({ message: "No cars found for this brand" });

  res.status(200).json(cars);
});

app.post("/api/cars", (req, res) => {
  const { model, brand, year } = req.body;

  if (!model || !brand || !year)
    return res
      .status(400)
      .json({ message: "Model, brand and year are required" });

  db.createCar(model, brand, year);
  res.status(201).json({ message: "Car saved successfully" });
});

app.put("/api/cars/:id", (req, res) => {
  const { model, brand, year } = req.body;

  if (!model || !brand || !year)
    return res
      .status(400)
      .json({ message: "Model, brand and year are required" });

  try {
    db.updateCar(model, brand, year, req.params.id);
    res.status(200).json({ message: "Car updated successfully" });
  } catch {
    res.status(404).json({ message: "Car not found" });
  }
});

app.delete("/api/cars/:id", (req, res) => {
  try {
    db.deleteCar(req.params.id);
    res.status(204).json({ message: "Car deleted successfully" });
  } catch {
    res.status(404).json({ message: "Car not found" });
  }
});

app.listen(PORT, () => console.log("A szerver fut"));
