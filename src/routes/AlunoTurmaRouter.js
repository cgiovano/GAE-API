const express = require('express');
const router = express.Router();
const alunoTurmaController = require('../controllers/AlunoTurmaController');


router.get('/alunos-sem-turma/', alunoTurmaController.ObterAlunosSemTurma);
router.get('/:id', alunoTurmaController.ObterAlunosPorTurma);
router.get('/', alunoTurmaController.Obter);

router.post('/cadastrar/', alunoTurmaController.Criar);
router.delete('/deletar/', alunoTurmaController.Deletar);

module.exports = router;
