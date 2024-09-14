const express = require('express');
const router = express.Router();
const questaoController = require('../controllers/QuestaoController');

router.get('/', questaoController.Listar);
router.get('/', questaoController.ObterItem);
router.post('/', questaoController.Criar);
router.put('/:id', questaoController.Atualizar);
router.delete('/:id', questaoController.Deletar);

module.exports = router;