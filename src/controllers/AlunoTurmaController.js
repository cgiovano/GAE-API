const AlunoTurmaModel = require('../models/AlunoTurmaModel');
const AlunoModel = require('../models/AlunoModel');
const { Op } = require('sequelize');

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
        const id_turma = req.query.id_turma;
        const id_aluno = req.query.id_aluno;

        console.log(id_turma);
        console.log(id_aluno);

        try {
            const registro = await AlunoTurmaModel.findOne({where: {id_turma: id_turma, id_aluno: id_aluno}});

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
        const id_turma = req.query.id_turma;

        try {
            const alunosTurma = await AlunoTurmaModel.findAll({where: {id_turma: id_turma}});
            const alunosIds = alunosTurma.map(at => at.id_aluno);

            console.log(alunosIds);

            const alunosPorTurma = await AlunoModel.findAll({where: {id: alunosIds}});

            if (alunosPorTurma) {
                return(res.status(201).json(alunosPorTurma));
            } else {
                return(res.status(400).json({message: "Erro no processamento! Não foram encontrados registros!"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor!"}))
        }
    },

    async ObterAlunosSemTurma(req, res) {
        console.log("Olá teste");
        try {
            const alunosTurma = await AlunoTurmaModel.findAll();
            console.log(alunosTurma);
            const alunosIds = alunosTurma.map(at => at.id_aluno);
            console.log(alunosTurma);

            const alunosSemTurma = await AlunoModel.findAll({where: {id: {[Op.notIn]: alunosIds}}});
            console.log(alunosSemTurma);

            if(alunosSemTurma) {
                return(res.status(201).json(alunosSemTurma));
            } else {
                return(res.status(401).json({message: "Erro no processamento da requisição"}));
            }
        } catch (error) {
            console.log(error);
            return(res.status(500).json({message: "Erro interno do servidor!"}));
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
        const {id_turma, id_aluno} = req.query;
        console.log(req.query);
        
        try {
            const registro = await AlunoTurmaModel.findOne({where: {id_turma: id_turma, id_aluno: id_aluno}});
            registro.destroy();
            return(res.status(201).json({message: "Objeto deletado com sucesso!"}));
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor"}));
        }
    }
}