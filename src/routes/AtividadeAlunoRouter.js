const express = require('express');
const router = express.Router();
const atividadeAlunoController = require('../controllers/AtividadeAlunoController');

//router.get('/', atividadeAlunoController.Listar);
router.get('/', atividadeAlunoController.ListarAssociacao);
router.post('/', atividadeAlunoController.Criar);
router.put('/:id', atividadeAlunoController.Atualizar);
router.delete('/', atividadeAlunoController.Deletar);

module.exports = router;