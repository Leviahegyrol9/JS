import express from 'express'

const PORT=3000;
const app = express();

app.use(express.json())
const users = [
    {id: 1, name: 'Alan'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Cloe'}
]

app.get('/users', (req,res) => {

    res.json(users)
})

app.get('/users/:id', (req,res) => {
    const id = +req.params.id
    const user = users.find(x => x.id == id)
    if(!user)
    {
       return res.status(404).json({message: 'User not found!'})
    }
    res.status(200).json(user)
})

app.post('/users', (req,res) => {
    // const name = req.body.name
    const {name, age} = req.body
    const nextId = users[-1]?.id + 1;
    const user = {id: nextId, name}
    users.push(user)
    res.status(200).json(user)
})

app.delete('/users', (req,res) => {
    const id = +req.params.id;
    const user = users.find(x => x.id == id)
    if(!user)
    {
       return res.status(404).json({message: 'User not found!'})
    }
    res.status(200).json(user)
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})