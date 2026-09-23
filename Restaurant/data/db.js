import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
});

await connection.execute(`CREATE DATABASE IF NOT EXISTS restaurant`);
await connection.changeUser({ database: "restaurant" });

await fillDb();

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

async function fillDb(){
    await connection.query(`USE restaurant`);

    await connection.execute(`
        CREATE TABLE IF NOT EXISTS foods(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            price INT NOT NULL,
            weight INT NOT NULL
        )
    `);

    const [rows] = await connection.execute("SELECT COUNT(*) as count FROM foods");


    if(rows[0].count == 0){

        const foods = [
            ["Pizza", 2500, 500],
            ["Hamburger", 1800, 350],
            ["Hot Dog", 1200, 200],
            ["Gyros", 2200, 400],
            ["Rántott hús", 3000, 450],
            ["Sült krumpli", 900, 250],
            ["Lasagne", 2800, 500],
            ["Tacos", 2400, 300],
            ["Saláta", 1500, 250],
            ["Palacsinta", 800, 150],
            ["Spagetti", 2600, 450],
            ["Sushi", 4200, 350],
            ["Kebab", 2300, 400],
            ["Steak", 5500, 600],
            ["Csirkemell", 2900, 450],
            ["Halfilé", 3200, 400],
            ["Rizs", 700, 200],
            ["Leves", 1400, 300],
            ["Túrógombóc", 1600, 250],
            ["Brownie", 1200, 180],
            ["Fagyi", 600, 100],
            ["Wrap", 2100, 300],
            ["Nuggets", 1700, 250],
            ["Pörkölt", 3400, 500],
            ["Rakott krumpli", 2700, 450],
            ["Tojásrántotta", 1300, 220],
            ["Bagett", 900, 180],
            ["Croissant", 700, 120],
            ["Kürtőskalács", 1500, 200],
            ["Cheeseburger", 2400, 380]
        ];

        await connection.query("INSERT INTO foods (name, price, weight) VALUES ?",[foods]);
    }
}