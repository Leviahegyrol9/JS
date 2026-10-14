const express = require("express");
const PORT = 3000;
const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "books",
});
connection.connect((err) => {
  if (err) {
    throw err;
    console.log(err);
  }
});

app.get("/books/", (req, res) => {
  const id = +req.params.id;

  connection.query("SELECT * FROM books", (err, qres) => {
    if (err) {
      return res.status(500).send("Hiba az adatbázis elérésekor!");
    }

    res.status(200).json(qres);
  });
});

app.get("/books/:id", (req, res) => {
  const id = +req.params.id;

  connection.query("SELECT * FROM books WHERE id = ?", [id], (err, qres) => {
    if (err) {
      return res.status(500).send("Nem sikerült az adatokat lekérni.");
    }

    if (!qres.length) {
      return res.status(404).send("A könyv nem található.");
    }

    res.status(200).json(qres);
  });
});

app.listen(PORT, () => {
  console.log("A szerver fut.");
});
