// database.js
const sqlite3 = require('sqlite3').verbose();

// Cria o banco de dados em memória
const db = new sqlite3.Database('./pets.db', (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});

// Criando a tabela de pets se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      species TEXT NOT NULL
    )
  `);
});

module.exports = db;
