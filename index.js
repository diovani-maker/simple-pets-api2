const express = require('express');
const bodyParser = require('body-parser');
const petsRouter = require('./pets'); // Verifique o caminho para pets.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', petsRouter); // Para acessar as rotas de pets

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
