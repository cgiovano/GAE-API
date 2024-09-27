const AlunoTurmaModel = require('../models/AlunoTurmaModel');

module.exports = {
    async Obter(req, res) {
        try {
            const registro = await AlunoTurmaModel.findAll();
            return(res.status(200).json(registro));
        } catch(error) {
            return(res.status(500).json({message: "ocorreu um erro"}));
        }
    }, 

    async ObterItem(req, res) {
        const idTurma = req.params.idTurma;
        const idAluno = req.params.idAluno;

        try {
            const registro = await AlunoTurmaModel.findOne({where: {id_turma: idTurma, id_aluno: idAluno}});

            if(registro) {
                return(res.status(200).json(registro));
            } else {
                return(res.status(400).json({message: "Erro na requisição"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor"}))
        }
    },
    
    async Criar(req, res) {
        let registro = req.body;

        try {
            registro = await AlunoTurmaModel.create({id_turma: registro.idTurma, id_aluno: registro.idAluno});
        } catch (error) {

        }
    }, 

    async Atualizar(req, res) {

    }, 

    async Deletar(req, res) {

    }
}