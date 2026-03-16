import express from 'express'

const PORT = 3000
const app = express()

app.use(express.json())

const awards = [
    {id: 1, title: 'Lord of the Rings', category: 'Best director'},
    {id: 2, title: 'Titanic', category: 'Best film'},
    {id: 3, title: 'List of Schindler', category: 'Best film'}
]

app.get('/awards', (req, res) =>{
    res.status(200).json(awards)
})

app.get('/awards/:id', (req,res) =>{
    const id = +req.params.id
    const award = awards.find((film) => film.id === id);
    if(!award)
    {
        return res.status(404).json({message: "Award not found!"})

    }
    res.status(200).json(award)
})

app.post('/awards', (req,res) =>{
    const {title, category} = req.body
    if (!title || !category){
         return res.status(404).json({message: "Movie title and category are required!"})
    }
    const id = awards[awards.length - 1]?.id + 1 
    const award = {id, title, category}
    awards.push(award);
    res.status(200).json(award);
})

app.put('/awards/:id', (req,res) =>{
    const id = +req.params.id
    const award = awards.find(film => film.id === id);
      if(!award)
    {
        return res.status(404).json({message: "Award not found!"})
    }
     const{title, category} = req.body
    if (!title || !category){
         return res.status(404).json({message: "Movie title and category are required!"})
    }
    award.title = title;
    award.category = category;
    res.status(201).json(award)
})

app.delete('/awards/:id', (req,res) =>{
    const id = +req.params.id
    const award = awards.find(x => x.id === id)
    if(!award)
    {
        return res.status(404).json({message: "Award not found!"})
    }
    const index = awards.indexOf(award);
    awards.splice(index,1)
    res.status(201).json({message: 'Delete success'})
})

app.listen(PORT, () =>{
    console.log(`Server runs on http://localhost:${PORT}/awards`);
})