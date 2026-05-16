import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "restaurant"
});

export async function getMenu() {
    const [rows] = await connection.execute("SELECT * FROM foods");

    return rows;
}

export async function getFoodById(id) {
    const [rows] = await connection.execute("SELECT * FROM foods WHERE id = ?", [id]);

    return rows[0] || null;
}

export async function addFood(name, price, weight){
    return await connection.execute("INSERT INTO foods (name, price, weight) VALUES (?, ?, ?)", [name, price, weight]);
}

export async function modifyFood(id, name, price, weight){
    return await connection.execute("UPDATE foods SET name = ?, price = ?, weight = ? WHERE id = ?", [name, price, weight, id]);
}

export async function deleteFood(id){
    return await connection.execute("DELETE FROM foods WHERE id = ?", [id]);
}