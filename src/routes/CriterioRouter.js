const express = require('express');
const router = express.Router();
const criterioController = require('../controllers/CriterioController');

router.get('/', criterioController.Listar);
router.get('/:id', criterioController.ObterItem);
router.get('/questao/:id', criterioController.ListarCriterioPorQuestao);
router.post('/', criterioController.Criar);
router.put('/:id', criterioController.Atualizar);
router.delete('/:id', criterioController.Deletar);

module.exports = router;