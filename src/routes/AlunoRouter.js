const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/AlunoController.js');

router.get('/', alunosController.Listar);
router.get('/:id', alunosController.ObterItem);
router.post('/cadastrar/', alunosController.Criar);
router.put('/editar/:id', alunosController.Atualizar);
router.delete('/:id', alunosController.Deletar);

module.exports = router;