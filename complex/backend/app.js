import express from "express";
import cors from "cors";
import bycrypt from "bcrypt";
import * as db from "./databases/db.js";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/bikes", (req, res) => {
  const bikes = db.getAllBikes();
  if (!bikes.length) return res.status(404).json({ message: "No bikes found" });
  res.status(200).json(bikes);
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = db.findUser(email);
  if (!user || !(await bycrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const safeUser = { ...user };
  delete safeUser.password;

  res.status(200).json({ message: "Login successful", user: safeUser });
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = db.findUser(email);

  if (user) {
    return res.status(409).json({ message: "User already exists" });
  }

  db.createUser(email, await bycrypt.hash(password, 10));

  const safeUser = { ...db.findUser(email) };
  delete safeUser.password;

  res.status(201).json({ message: "Registration successful", user: safeUser });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
