const mongoose = require('mongoose');

const banco = mongoose;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

banco
  .connect('mongodb://127.0.0.1:27017/livraria', options)
  .then(() => console.log('MongoDB conectado.'))
  .catch((erro) => console.error('Erro ao conectar ao MongoDB:', erro));

module.exports = banco;
