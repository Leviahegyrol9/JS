import Database from "better-sqlite3";

const db = new Database("./db/database.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS writing_tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand STRING,
    type STRING,
    color STRING,
    price REAL,
    stock INTEGER,
    refillable INTEGER
)`,
).run;

export const getToolsById = (id) =>
  db.prepare("SELECT * FROM writing_tools WHERE id = ?").get(id);

export const getToolsByBrand = (brand) =>
  db.prepare("SELECT * FROM writing_tools WHERE brand = ?").get(brand);

export const getToolsByType = (type) =>
  db.prepare("SELECT * FROM writing_tools WHERE type = ?").get(type);

export const getToolsByColor = (color) =>
  db.prepare("SELECT * FROM writing_tools WHERE color = ?").get(color);

export const createTool = (brand, type, color, price, stock, refillable) =>
  db
    .prepare(
      "INSERT INTO writing_tools (brand, type, color, price, stock, refillable) WHERE (?, ?, ?, ?, ?, ?)",
    )
    .run(brand, type, color, price, stock, refillable);

export const updateTool = (id, brand, type, color, price, stock, refillable) =>
  db
    .prepare(
      "UPDATE writing_tools SET brand = ?, type = ?, color = ?, price = ?, stock = ?, refillable = ? WHERE id = ?",
    )
    .run(brand, type, color, price, stock, refillable, id);

export const deleteTool = (id) =>
  db.prepare("DELETE FROM writing_tools WHERE id = ?").run(id);
