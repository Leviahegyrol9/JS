import Database from "better-sqlite3"

const db = new Database("./data/database.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS harryPotter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nev STRING,
    szarmazas STRING
    )
    `).run()

export function getAllPotter(){
    return db.prepare(`SELECT * FROM harryPotter`).all()
}

export function getAllPotterById(id){
    return db.prepare(`SELECT * FROM harryPotter WHERE id = ?`).get(id)
}

export function savePotter(nev, szarmazas){
    return db.prepare(`INSERT INTO harryPotter (nev, szarmazas) VALUES (?, ?)`).run(nev, szarmazas)
}

export function updatePotter(id, nev, szarmazas){
    return db.prepare(`UPDATE harryPotter SET nev = ?, szarmazas = ? WHERE id = ?`).run(nev, szarmazas, id)
}

export function deletePotter(id){
    return db.prepare(`DELETE FROM harryPotter WHERE id = ?`).run(id)
}