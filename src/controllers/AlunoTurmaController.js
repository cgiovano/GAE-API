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
        const idTurma = req.query.idTurma;
        const idAluno = req.query.idAluno;

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

    async ObterAlunosPorTurma(req, res) {
        const id_turma = req.params.id_turma;

        try {
            const alunos = await AlunoTurmaModel.findAll({where: {id_turma: id_turma}});
            if (alunos) {
                return(res.status(201).json(alunos));
            } else {
                return(res.status(400).json({message: "Erro no processamento! Não foram encontrados registros!"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor!"}))
        }
    },
    
    async Criar(req, res) {
        const {id_turma, id_aluno} = req.body;

        try {
            const registro = await AlunoTurmaModel.create({id_turma: id_turma, id_aluno: id_aluno});
            return(res.status(201).json(registro));
        } catch (error) {
            console.log(error);
            return(res.status(500).json({message: "Erro interno do servidor!"}));
        }
    }, 

    async Atualizar(req, res) {

    }, 

    async Deletar(req, res) {
        const id_turma = req.query.id_turma;
        const id_aluno = req.query.id_aluno;

        try {
            const registro = await AlunoTurmaModel.findOne({where: {id_turma: id_turma, id_aluno: id_aluno}});
            registro.destroy();
            return(res.status(201).json({message: "Objeto deletado com sucesso!"}));
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor"}));
        }
    }
}