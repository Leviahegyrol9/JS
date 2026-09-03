import express from "express"
import * as db from "./data/db.js"

const PORT = 3080
const app = express()

app.use(express.json())

app.get("/posts", (req, res) =>{
    const posts = db.getAllPost();
    res.status(200).json(posts)
})

app.get("/posts/:id", (req, res) => {
    const post = db.getPostById(+req.params.id);

    if (!post){
        return res.status(404).json({error: "Poszt nem található"})
    }

    res.status(200).json(post)
})

app.post("/posts", (req, res) =>{
    const {title, content} = req.body

    if (!title || !content){
        return res.status(400).json({error: "Poszt adat hiány"})
    }

    const newPost = db.savePost(title, content)

    res.status(201).json({id: newPost.lastInsertRowid})
})

app.delete("/posts/:id", (req, res) =>{
    const post = db.getPostById(+req.params.id)

    if (!post){
        return res.status(404).json({error: "Poszt nem található"})
    }

    db.deletePost(+req.params.id)
    res.status(204)
})

app.listen(PORT, () => {console.log(`Fut: ${PORT}`)})