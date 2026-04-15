import express from "express";
import * as db from "./data/db.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/books", (req, res) => {
    const books = db.getAllBooks();
    res.json(books);
});

app.get("/books/:id");

app.listen(PORT, () =>{
    console.log("Fut");
});