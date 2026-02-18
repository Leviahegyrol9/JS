import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const user = {
    name: "Levente",
    class: "12.B",
    year: 2007,
  };
  res.json({ user });
});
// app.post('/', (req, res) => {});
// app.put('/', (req, res) => {});
// app.patch('/', (req, res) => {});
// app.delete('/', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
