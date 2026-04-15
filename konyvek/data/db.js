import Database from "better-sqlite3";

const db = new Database("./data/adatbazis.db");

db.prepare(`
    CREATE TABLE if NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author STRING,
    title STRING,
    year INTEGER
    )
    `).run();

export function getAllBooks(){
    return db.prepare(`SELECT * FROM books`).all();
}

export default db;