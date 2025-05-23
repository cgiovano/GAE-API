const { query } = require("express");
const QuestaoModel = require("../models/QuestaoModel");
const Atividade = require("../models/AtividadeModel");
const CorrecaoQuestao = require("../models/CorrecaoQuestaoModel");
const CorrecaoQuestaoController = require("./CorrecaoQuestaoController");
const CriterioService = require("../services/CriterioService");

module.exports = {
    async Listar(req, res) {
        const id_atividade = req.query.id_atividade;

        try {
            const questao = await QuestaoModel.findAll({where: {id_atividade: id_atividade}});
            return(res.status(201).json(questao));
        } catch (error) {
            res.status(500).send({message: "Erro interno do servidor."});
        }
    },

    async ObterItem(req, res) {
        const {id} = req.params;

        try {
            const questao = await QuestaoModel.findByPk(id);

            if(questao) {
                return (res.status(201).json(questao));
            }

        } catch (error) {
            res.status(500).send({message: "erro interno do servidor."});
        }
    }, 
    
    async Criar(req, res) {

        if(!Array.isArray(req.body)) {
            const {id_atividade, descricao, valor} = req.body;

            try {
                const questao = await QuestaoModel.create({
                    id_atividade: id_atividade, 
                    descricao: descricao, 
                    valor: valor
                });
                res.status(201).json(questao);
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erro interno do servidor."});
            }
        } else {
            console.log("registro do tipo array/bulk")
            const dados = req.body;

            try {
                const questoes = await QuestaoModel.bulkCreate(dados);
                res.status(201).json(questoes);
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erro interno do servidor."});
            }
        }
    }, 

    async Atualizar(req, res) {
        const {id} = req.params;
        const { id_atividade, descricao, valor } = req.body

        try {
            let questao = await QuestaoModel.findByPk(id);

            if(questao) {
                questao = await questao.update({id_atividade: id_atividade, descricao: descricao, valor: valor});
                return (res.status(201).json(questao));
            } else {
                res.status(500).json({message: "Erro. Não foi possível atualizar o objeto."});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json("Erro interno do servidor.");
        }
    }, 

    async Deletar(req, res) {
        const {id} = req.params;

        try {
            const questao = await QuestaoModel.findByPk(id);

            if(questao) {
                QuestaoModel.destroy({where: {id: id}});
                return (res.status(201).json({message: "Objeto deletado com sucesso."}));
            } else {
                return (res.status(500).json({message: "Não foi possível deletar o objeto."}))
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
};