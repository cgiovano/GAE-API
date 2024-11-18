const express = require('express');
const router = express.Router();
const atividadeController = require('../controllers/AtividadeController');

router.get('/', atividadeController.Listar);
router.post('/', atividadeController.Criar);
router.put('/:id', atividadeController.Atualizar);
router.delete('/:id', atividadeController.Deletar);

module.exports = router;