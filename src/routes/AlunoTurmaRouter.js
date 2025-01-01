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

router.post('/', alunoTurmaController.Criar);
router.delete('/', alunoTurmaController.Deletar);

module.exports = router;
