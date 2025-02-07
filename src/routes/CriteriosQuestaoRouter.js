const express = require('express');
const router = express.Router();
const criterioQuestaoController = require('../controllers/CriteriosQuestaoController');

// Adicionar uma rota para listar critérios por questão e atividade
router.get('/:id', criterioQuestaoController.ListarCriterioPorQuestao);
router.get('/', criterioQuestaoController.ObterItem);
router.post('/', criterioQuestaoController.Criar);
router.put('/', criterioQuestaoController.Atualizar);
router.delete('/', criterioQuestaoController.Deletar);

module.exports = router;