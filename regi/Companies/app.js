import express from 'express'
import * as db from './data/db.js'


const PORT = 3000
const app = express()

app.use(express.json())

app.get("/companies", (req,res) =>{
    const companies = db.getAllCompanies()
    res.status(200).json(companies)
})

app.get("/companies/:id", (req, res) =>{
    const company = db.getCompanyById(+req.params.id)
    res.status(200).json(company)
})

app.listen(PORT, () =>{console.log("Fut")})