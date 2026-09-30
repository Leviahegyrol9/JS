import express from "express"
import books from "./data/data.js"

const PORT = 3000

const app = express()

app.use(express.json())

app.get("/api/books", (req,res) =>{
    if (!books || books.length == 0) return res.status(404).json({message: "Nincsen könyv!"})
    res.status(200).json(books)
})

app.get("/api/books/:id", (req, res) =>{
    const book = books.find(b => b.id == req.params.id)

    if (!book) return res.status(404).json({message: "Not Found"})

    res.status(200).json(book)
})

app.post("/api/books", (req, res) =>{
    const {title, author, year, genre} = req.body

    if (!title, !author, !year, !genre) return res.status(400).json({message: "Bad request"})

    books.push({
        id: books.findLast(x => x).id + 1,
        title: title,
        author: author,
        year: year,
        genre: genre
    })

    res.status(200).json(books.at(-1))
})

app.put("/api/books/:id", (req, res) =>{
    const book = books.find(x => x.id == req.params.id)

    if (!book) return res.status(404).json({message: "Not Found"})

    const {title, author, year, genre} = req.body

    if (!title, !author, !year, !genre) return res.status(400).json({message: "Bad request"})

    book.title = title
    book.author = author
    book.year = year
    book.genre = genre

    res.status(200).json(book) 
})

app.put("/api/books/:id", (req, res) =>{
    const book = books.find(x => x.id == req.params.id)

    if (!book) return res.status(404).json({message: "Not Found"})

    const {title, author, year, genre} = req.body

    if (!title, !author, !year, !genre) return res.status(400).json({message: "Bad request"})

    book.title = title
    book.author = author
    book.year = year
    book.genre = genre

    res.status(200).json(book) 
})

app.delete("/api/books/:id", (req, res) =>{
    const book = books.find(x => x.id == req.params.id)

    if (!book) return res.status(404).json({message: "Not Found"})

    books.splice(books.indexOf(book), 1)

    res.status(200).json({message: "Delete complete"})
})

app.listen(PORT, () =>{console.log(`A szerver fut: http://localhost:${PORT}`)})