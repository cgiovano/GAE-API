const CorrecaoModel = require("../models/CorrecaoModel");
const CorrecaoService = require("../services/CorrecaoService");

module.exports = {
    async Listar(req, res) {
        try {
            const correcoes = await CorrecaoModel.findAll();
            return (res.status(201).json(correcoes));
        } catch (error) {
            console.log(error);
            res.send(500).json({message: "erro interno do servidor."});
        }
    }, 

    async ObterItem(req, res) {
        const {id} = req.params;

        try {   
            const correcao = await CorrecaoModel.findByPk(id);

            if(correcao) {
                return (res.status(201).json(correcao))
            } else {
                return (res.status(500).json({message: "Erro. O item não foi encontrado."}));
            }
            
        } catch (error) {
            res.send(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Criar(req, res) {
        const {id_atividade, id_aluno, id_turma, pontuacao} = req.body;

        try {
            const correcao = await CorrecaoModel.create({id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma, pontuacao: pontuacao});
            const correcaoCriada = CorrecaoService.criarCorrecao(correcao);
            return (res.status(201).json(correcao, correcaoCriada));
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Atualizar(req, res) {
        const {id} = req.params;
        const {id_atividade, id_aluno, id_turma, pontuacao} = req.body;

        try {
            const correcao = await CorrecaoModel.findByPk(id);

            if(correcao) {
                correcao = await correcao.update({id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma, pontuacao: pontuacao});
                return (res.status(201).json({correcao}));
            } else {
                return (res.status(500).json({message: "Erro. O item não foi encontrado."}));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Deletar(req, res) {
        const {id} = req.params;

        try {
            const correcao = await CorrecaoModel.findByPk(id);

            if(correcao) {
                await CorrecaoModel.destroy({where: {id: id}});
                return (res.status(201).json({message: "Item deletado."}));
            } else {
                return (res.status(500).json({message: "Item não encontrado."}));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
};