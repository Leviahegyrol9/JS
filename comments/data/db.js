import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author STRING,
    message STRING
    )
    `,
).run();

export const getAllComments = () =>
  db
    .prepare(
      `
    SELECT * FROM comments
    `,
    )
    .all();

export const getCommentById = (id) =>
  db
    .prepare(
      `
    SELECT * FROM comments WHERE id = ?
    `,
    )
    .get(id);

export const saveComment = (author, message) =>
  db
    .prepare(
      `
    INSERT INTO comments (author, message) VALUES (?, ?)
    `,
    )
    .run(author, message);

export const updateComment = (id, author, message) =>
  db
    .prepare(`UPDATE comments SET author = ?, message = ? WHERE id = ?`)
    .run(author, message, id);

export const deleteComment = (id) =>
  db.prepare(`DELETE FROM comments WHERE id = ?`).run(id);

const { commentsNumber } = db
  .prepare(`SELECT COUNT(*) AS commentsNumber FROM comments`)
  .get();
if (commentsNumber == 0) {
  saveComment("Anna", "Nagyon tetszik ez a bejegyzés!");
  saveComment("Béla", "Szerintem ez nem teljesen így van.");
  saveComment("Csilla", "Köszönöm a hasznos információkat!");
  saveComment("Dávid", "Érdekes nézőpont, elgondolkodtató.");
  saveComment("Eszter", "Remek munka, csak így tovább!");
  saveComment("Ferenc", "Lehetne egy kicsit részletesebb.");
  saveComment("Gábor", "Teljes mértékben egyetértek.");
  saveComment("Hanna", "Ez most nagyon jól jött, köszi!");
  saveComment("István", "Nem győzött meg teljesen.");
  saveComment("Júlia", "Szuper összefoglaló!");
}
