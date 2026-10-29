var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    mensagem: 'Servidor da Livraria funcionando.'
  });
});

module.exports = router;
