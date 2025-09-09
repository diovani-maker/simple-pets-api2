// pets.js
const express = require('express');
const db = require('./database');

const router = express.Router();

// Rota para listar pets
router.get('/', (req, res) => {
  db.all('SELECT * FROM pets', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});

// Rota para adicionar um pet
router.post('/', (req, res) => {
  const { name, age, species } = req.body;

  if (!name || !age || !species) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  db.run(
    'INSERT INTO pets (name, age, species) VALUES (?, ?, ?)',
    [name, age, species],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, name, age, species });
    }
  );
});

module.exports = router;
