import Database from "better-sqlite3"

const db = new Database("./data/database.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS companies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city STRING,
    zipcode INTEGER,
    company STRING,
    address STRING
    )
    `).run()

export function getAllCompanies(){
    return db.prepare(`SELECT * FROM companies`).all()
}

export function getCompanyById(id){
    return db.prepare(`SELECT * FROM companies WHERE id = ?`).get(id)
}

export function createCompany(city, zipcode, company, address){
    return db.prepare(`INSERT INTO companies (city, zipcode, company, address) VALUES (?, ?, ?, ?)`).run(city, zipcode, company, address)
}

export function updateCompany(id, city, zipcode, company, address){
    return db.prepare(`UPDATE companies SET city = ?, zipcode = ?, company = ?, address = ? WHERE id = ?`).run(city, zipcode, company, address, id)
}

export function deleteCompany(id){
    return db.prepare(`DELETE FROM companies WHERE id = ?`).run(id)
}