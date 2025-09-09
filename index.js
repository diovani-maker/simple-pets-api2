// index.js
const express = require('express');
const bodyParser = require('body-parser');
const petsRoutes = require('./pets');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do body-parser para JSON
app.use(bodyParser.json());

// Rotas de pets
app.use('/api/pets', petsRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
