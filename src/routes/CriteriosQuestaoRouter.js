const express = require('express');
const router = express.Router();
const criterioQuestaoController = require('../controllers/CriteriosQuestaoController');

router.get('/', criterioQuestaoController.Listar);
router.get('/', criterioQuestaoController.ObterItem);
router.post('/', criterioQuestaoController.Criar);
router.put('/:id', criterioQuestaoController.Atualizar);
router.delete('/:id', criterioQuestaoController.Deletar);

module.exports = router;