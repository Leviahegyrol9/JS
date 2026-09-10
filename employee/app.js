import express from 'express'
import * as employeeRoutes from "./routes/employees.js"


const PORT = 3000
const app = express()

app.use(express.json())

app.use("/api/employees", employeeRoutes)

app.listen(PORT, () =>{console.log("Fut")})