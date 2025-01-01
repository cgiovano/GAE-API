const express = require('express');
const router = express.Router();
const itemCriterioController = require('../controllers/ItemCriterioController.js');

router.get('/', itemCriterioController.Obter);
router.post('/', itemCriterioController.Criar);
router.put('/:id', itemCriterioController.Atualizar);
router.delete('/:id', itemCriterioController.Deletar);

module.exports = router;