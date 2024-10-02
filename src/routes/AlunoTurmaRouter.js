const express = require('express');
const router = express.Router();
const alunoTurmaController = require('../controllers/AlunoTurmaController');


router.get('/alunos-sem-turma/', alunoTurmaController.ObterAlunosSemTurma);
router.get('/:id', alunoTurmaController.ObterAlunosPorTurma);
router.get('/', (req, res, next) => {
    const {id_turma, id_aluno} = req.query;

    if(id_turma && id_aluno) {
        alunoTurmaController.ObterItem(req, res);
    } else {
        alunoTurmaController.Obter(req, res);
    }
});

router.post('/cadastrar/', alunoTurmaController.Criar);
router.delete('/deletar/', alunoTurmaController.Deletar);

module.exports = router;
