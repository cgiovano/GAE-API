const express = require('express');
const router = express.Router();
const anoLetivoController = require('../controllers/AnoLetivoController.js');

router.get('/', anoLetivoController.Listar);
router.get('/:id', anoLetivoController.ObterItem);
router.post('/cadastrar/', anoLetivoController.Criar);
router.put('/editar/:id', anoLetivoController.Atualizar);
router.delete('/:id', anoLetivoController.Deletar);

module.exports = router;