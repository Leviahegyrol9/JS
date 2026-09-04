import express from "express"
import * as db from "./data/db.js"

const PORT = 3333
const app = express()

app.use(express.json())

app.get("/potter", (req,res) =>{
    const comments = db.getAllPotter()
    res.status(200).json(comments)
})

app.get("/potter/:id", (req, res) =>{
    const comment = db.getAllPotterById(+req.params.id)
    if (!comment){
        return res.status(404).json({message: "Not Found"})
    }

    res.status(200).json(comment)
})

app.post("/potter", (req, res) =>{
    const {nev, szarmazas} = req.body
    if (!nev || !szarmazas){
        return res.status(400).json({message: "Adja meg az adatokat"})
    }
    const newComment = db.savePotter(nev, szarmazas)
    const comment = db.getAllPotterById(newComment.lastInsertRowid)
    res.status(201).json(comment)

})

app.put("/potter/:id", (req, res))

app.listen(PORT, () => console.log(`A server fut a ${PORT} porton.`))