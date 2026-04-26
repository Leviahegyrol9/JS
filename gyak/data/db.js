import Database from "better-sqlite3";

const db = new Database("./database.sqlite");

db.prepare(`
    CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author STRING,
    message STRING
    )
    `).run();

export const getAllComments = () => {
    db.prepare(`SELECT * FROM comments`).all()
}

export const getCommentById = (id) => {
    db.prepare(`SELECT * FROM comments WHERE id = ?`).get(id)
}

export const saveComment = (author, message) => {
    db.prepare(`INSERT INTO comments (author, message) VALUES (?, ?)`).run(author, message)
}

export const updateComment = (id, author, message) =>{
    db
    .prepare(`UPDATE comments SET author = ?, message = ? WHERE id = ?`)
    .run(author, message, id);
}
  
export const deleteComment = (id) => {
    db.prepare(`DELETE FROM comments WHERE id = ?`).run(id);
}
