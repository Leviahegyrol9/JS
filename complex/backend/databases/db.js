import Database from "better-sqlite3";

const usersDb = new Database("./databases/users.db");

const bikesDb = new Database("./databases/bikes.db");

export const getAllBikes = () => bikesDb.prepare("SELECT * FROM bikes").all();

export const getAllUsers = () => usersDb.prepare("SELECT * FROM users").all();
