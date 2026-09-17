import express from "express";
import * as db from "./db/db.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/api/tools/:id", (req, res) => {
  const tool = db.getToolsById(+req.params.id);

  if (!tool)
    return res.status(404).json({ message: "Az íróeszköz nem található." });

  res.status(200).json(tool);
});

app.get("/api/tools/brand/:brand", (req, res) => {
  const tool = db.getToolsByBrand(+req.params.id);

  if (!tool)
    return res.status(404).json({ message: "Az íróeszköz nem található." });

  res.status(200).json(tool);
});

app.get("/api/tools/type/:type", (req, res) => {
  const tool = db.getToolsByType(+req.params.id);

  if (!tool)
    return res.status(404).json({ message: "Az íróeszköz nem található." });

  res.status(200).json(tool);
});

app.get("/api/tools/color/:color", (req, res) => {
  const tool = db.getToolsByColor(+req.params.id);

  if (!tool)
    return res.status(404).json({ message: "Az íróeszköz nem található." });

  res.status(200).json(tool);
});

app.post("/api/tools", (req, res)=>{
    const {brand, type, color, price, stock, refillable} = req.body;
    db.createTool(brand, type, color, price, stock, refillable);
    return res.status(200).json("Az iróeszköz sikeresen létrehozva");
});

app.put("/api/tools/:id", (req, res)=>{
    const {brand, type, color, price, stock, refillable} = req.body;
    db.uodateTool(req.params.id, brand, type, color, price, stock, refillable);
    return res.status(200).json("Az iróeszköz sikeresen frissítve");
});

app.delete("/api/tools/:id", (req, res)=>{
    db.deleteTool(req.params.id);
    return res.status(200).json("Az iróeszköz sikeresen törölve");
});

app.listen(PORT, () => console.log(`Server runs on: http://localhost:${PORT}`));
