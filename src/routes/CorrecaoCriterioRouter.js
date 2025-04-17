const express = require('express');
const router = express.Router();
const correcaoItemCriterioController = require('../controllers/CorrecaoCriterioController');

router.get('/', correcaoItemCriterioController.Listar);
router.get('/', correcaoItemCriterioController.ObterItem);
router.post('/', correcaoItemCriterioController.Criar);
router.put('/:id', correcaoItemCriterioController.Atualizar);
router.delete('/:id', correcaoItemCriterioController.Deletar);

module.exports = router;