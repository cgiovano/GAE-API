const express = require('express');
const router = express.Router();
const anoLetivoController = require('../controllers/AnoLetivoController.js');

router.get('/', anoLetivoController.Listar);
router.get('/:id', anoLetivoController.ObterItem);
router.post('/', anoLetivoController.Criar);
router.put('/:id', anoLetivoController.Atualizar);
router.delete('/:id', anoLetivoController.Deletar);

module.exports = router;