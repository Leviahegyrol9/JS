import express from "express";
import cors from "cors";
import * as db from "./databases/db.js";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/bikes", (req, res) => {
  const bikes = db.getAllBikes();
  if (bikes.length == 0)
    return res.status(404).json({ message: "No bikes found" });
  res.status(200).json(bikes);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
