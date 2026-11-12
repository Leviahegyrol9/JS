import Database from "better-sqlite3";

const db = new Database("./data/sports.db");

export const getSportsById = (id) =>
  db
    .prepare(
      `
    SELECT * FROM sports WHERE id = ?
    `,
    )
    .get(id);

export const getSportsByCategory = (category) =>
  db
    .prepare(
      `
    SELECT * FROM sports WHERE category = ?
    `,
    )
    .all(category);

export const updateSport = (name, category, brand, price, quantity, id) =>
  db
    .prepare(
      `UPDATE sports SET name = ?, category = ?, brand = ?, price = ?, quantity = ? WHERE id = ?`,
    )
    .run(name, category, brand, price, quantity, id);

export const deleteSport = (id) =>
  db.prepare(`DELETE FROM sports WHERE id = ?`).run(id);
