import express from "express";
import * as db from "./data/db.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/books", (req, res) => {
    const books = db.getAllBooks();
    res.json(books);
});

app.get("/books/:id", (req, res) =>{
    const book = db.getBookById(+req.params.id)

    if (!book){
        return res.status(404).json({message: "Nincs ilyen könyv"})
    }
    
    res.status(200).json(book);
});

app.listen(PORT, () =>{
    console.log("Fut");
});