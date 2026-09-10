import Database from "better-sqlite3"

const db = new Database("./database/employees.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS employee (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company STRING,
    lastname STRING,
    firstname STRING,
    position STRING,
    salary REAL,
    department STRING,
    gender STRING,
    holiday_days INTEGER,
    birth_date TEXT
    )
    `).run()

export const getAllEmployee = () => db.prepare(`SELECT * FROM employee`).all()

export const getEmployeeById = (id) => db.prepare(`SELECT * FROM employee WHERE id = ?`).get(id)

export const createEmployee = (company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date) => db.prepare(`INSERT INTO employee (company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(company, lastname, firstname, position, salary, department, gender, holiday_days, birth_date)

export const updateEmployee = () => db.prepare(`UPDATE employee SET city = ?, zipcode = ?, company = ?, address = ? WHERE id = ?`).run(city, zipcode, company, address, id)

export const deleteEmployee = (id) => db.prepare(`DELETE FROM employee WHERE id = ?`).run(id)