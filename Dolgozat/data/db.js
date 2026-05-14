import DataBase from "better-sqlite3"
const db = new DataBase("./data/database.db")

db.prepare(`
    CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title STRING,
    content STRING)
    `).run()

export function getAllPost(){
    return db.prepare(`SELECT * FROM posts`).all()
}

export function getPostById(id){
    return db.prepare(`SELECT * FROM posts WHERE id = ?`).get(id)
}

export function savePost(title, content){
    return db.prepare(`INSERT INTO posts (title, content) VALUES (?,?)`).run(title,content)
}
export function deletePost(id){
    return db.prepare(`DELETE FROM posts WHERE id = ?`).run(id)
}