import * as controller from "../controllers/employeeController.js"
import { Router } from "express";

const router = Router()
router.get("/api/employees", controller.getAll())

router.get("/api/employees/:id", controller.getById(req, res));

/*
app.post("/api/employees", (req, res) => {
  const { brand, model, year } = req.body;
  if (!brand || !model, !year) {
    return res.status(400).json({ message: "Brand and model and year are required" });
  }
  const newCar = db.createCar(brand, model, year);
  const car = db.getCarById(newCar.lastInsertRowid);
  res.status(201).json({ message: "Car saved successfully", car });
});

app.put("/api/employees/:id", (req, res) => {
  const id = +req.params.id;
  const { brand, model, year } = req.body;
  if (!brand || !model, !year) {
    return res.status(400).json({ message: "Brand and model and year are required" });
  }
  const car = db.getCarById(id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  car.brand = brand;
  car.model = model;
  car.year = year;
  db.updateCar(car.id, car.brand, car.model, car.year);
  res.status(200).json({ message: "Car updated successfully", car });
});

app.delete("/api/employees/:id", (req, res) => {
  const id = +req.params.id;
  const car = db.getCarById(id);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }
  db.deleteCar(id);
  res.status(204).json({ message: "Car deleted successfully" });
});
*/