const express = require('express');
const router = express.Router();
const alunoTurmaController = require('../controllers/AlunoTurmaController');

router.get('/', alunoTurmaController.Obter);
router.get('/:id', alunoTurmaController.ObterAlunosPorTurma);
router.post('/cadastrar/', alunoTurmaController.Criar);
router.delete('/deletar/', alunoTurmaController.Deletar);

module.exports = router;
