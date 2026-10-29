const express = require('express');
const router = express.Router();

const {
  obterLivros,
  incluir,
  excluir
} = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao obter livros.',
      erro: erro.message
    });
  }
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);

    res.status(201).json({
      sucesso: true,
      mensagem: 'Livro incluído com sucesso.'
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Falha ao incluir livro.',
      erro: erro.message
    });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    const resultado = await excluir(codigo);

    if (resultado.deletedCount === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Livro não encontrado.'
      });
    }

    res.json({
      sucesso: true,
      mensagem: 'Livro excluído com sucesso.'
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: 'Falha ao excluir livro.',
      erro: erro.message
    });
  }
});

module.exports = router;
