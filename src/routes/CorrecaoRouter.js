const express = require('express');
const router = express.Router();
const correcaoController = require('../controllers/CorrecaoController');

router.get('/', correcaoController.Listar);
router.get('/', correcaoController.ObterItem);
router.get('/atividade/:id', correcaoController.ListarCorrecoesPorAtividade);
router.post('/', correcaoController.Criar);
router.put('/:id', correcaoController.Atualizar);
router.delete('/:id', correcaoController.Deletar);

module.exports = router;