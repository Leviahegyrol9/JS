import Database from "better-sqlite3"

const db = new Database("./data/database.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand STRING,
    model STRING,
    year INTEGER
    )
    `).run()

export function getAllCars(){
    return db.prepare(`SELECT * FROM cars`).all()
}

export function getCarById(id){
    return db.prepare(`SELECT * FROM cars WHERE id = ?`).get(id)
}

export function createCar(brand, model, year){
    return db.prepare(`INSERT INTO cars (brand, model, year) VALUES (?, ?, ?)`).run(brand, model, year)
}

export function updateCar(id, brand, model, year){
    return db.prepare(`UPDATE cars SET brand = ?, model = ?, year = ? WHERE id = ?`).run(brand, model, year, id)
}

export function deleteCar(id){
    return db.prepare(`DELETE FROM cars WHERE id = ?`).run(id)
}