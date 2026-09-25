import Database from "better-sqlite3";

const db = new Database("./data/database.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS cars(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model TEXT,
    brand TEXT,
    year INTEGER
)`,
).run();

export const getCarsByBrand = (brand) =>
  db.prepare("SELECT * FROM cars WHERE brand = ?").all(brand);

export const getCarsByYear = (year) =>
  db.prepare("SELECT * FROM cars WHERE year = ?").all(year);

export const createCar = (model, brand, year) =>
  db
    .prepare("INSERT INTO cars (model, brand, year) VALUES (?, ?, ?)")
    .run(model, brand, year);

export const updateCar = (model, brand, year, id) =>
  db
    .prepare("UPDATE cars SET model = ?, brand = ?, year = ? WHERE id = ?")
    .run(model, brand, year, id);

export const deleteCar = (id) =>
  db.prepare("DELETE from cars WHERE id = ?").run(id);
