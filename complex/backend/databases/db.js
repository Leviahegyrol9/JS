import Database from "better-sqlite3";

const usersDb = new Database("./databases/users.db");

const bikesDb = new Database("./databases/bikes.db");

export const getAllBikes = () => bikesDb.prepare("SELECT * FROM bikes").all();

export const getAllUsers = () => usersDb.prepare("SELECT * FROM users").all();

export const findUser = (email) =>
  usersDb.prepare("SELECT * FROM users WHERE email = ?").get(email);

export const createUser = (email, password) =>
  usersDb
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);
