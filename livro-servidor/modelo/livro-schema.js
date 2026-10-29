const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  titulo: {
    type: String,
    required: true
  },
  codEditora: {
    type: Number,
    required: true
  },
  resumo: {
    type: String,
    default: ''
  },
  autores: {
    type: [String],
    default: []
  }
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
