const QuestaoModel = require("../models/QuestaoModel");

module.exports = {
    async Listar(req, res) {
        try {
            const questao = QuestaoModel.findAll();
            return(res.status(201).json(questao));
        } catch (error) {
            res.status(500).send({message: "Erro interno do servidor."});
        }
    }, 

    async ObterItem(req, res) {
        const {id} = req.params;

        try {
            const questao = QuestaoModel.findByPk(id);

            if(questao) {
                return (res.status(201).json(questao));
            }

        } catch (error) {
            res.status(500).send({message: "erro interno do servidor."});
        }
    }, 

    async Criar(req, res) {
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
    }, 

    async Atualizar(req, res) {
        const {id} = req.params;
        const { id_atividade, descricao, valor } = req.body

        try {
            const questao = QuestaoModel.findByPk(id);

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