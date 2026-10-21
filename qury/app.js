const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'books',
  waitForConnections: true,
  connectionLimit: 10
});

app.get('/', (req, res) => {
  res.send('Node.js + MySQL szerver működik!');
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM users'
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Adatbázis hiba!' });
  }
});

app.get('/users/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    if (!Number.isInteger(userId) || userId < 1) {
      return res.status(400).json({
        error: 'Érvénytelen felhasználói ID!'
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        error: 'A felhasználó nem található!'
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Adatbázis hiba!' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'A név és az email kötelező!'
      });
    }

    const [result] = await db.query(
      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
      [name, email, age ?? null]
    );

    res.status(201).json({
      message: 'Felhasználó létrehozva!',
      id: result.insertId
    });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        error: 'Ez az email cím már létezik!'
      });
    }

    res.status(500).json({ error: 'Adatbázis hiba!' });
  }
});

app.put('/users/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    const { name, email, age } = req.body;

    if (!Number.isInteger(userId) || userId < 1) {
      return res.status(400).json({
        error: 'Érvénytelen felhasználói ID!'
      });
    }

    if (!name || !email) {
      return res.status(400).json({
        error: 'A név és az email kötelező!'
      });
    }

    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
      [name, email, age ?? null, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'A felhasználó nem található!'
      });
    }

    res.json({ message: 'Felhasználó módosítva!' });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        error: 'Ez az email cím már létezik!'
      });
    }

    res.status(500).json({ error: 'Adatbázis hiba!' });
  }
});

app.delete('/users/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    if (!Number.isInteger(userId) || userId < 1) {
      return res.status(400).json({
        error: 'Érvénytelen felhasználói ID!'
      });
    }

    const [result] = await db.query(
      'DELETE FROM users WHERE id = ?',
      [userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'A felhasználó nem található!'
      });
    }

    res.json({ message: 'Felhasználó törölve!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Adatbázis hiba!' });
  }
});

app.listen(PORT, async () => {
  try {
    await db.query('SELECT 1');

    console.log('MySQL kapcsolat sikeres!');
    console.log(`Szerver fut: http://localhost:${PORT}`);
  } catch (error) {
    console.error('MySQL kapcsolódási hiba:', error.message);
  }
});
