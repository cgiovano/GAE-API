const CorrecaoQuestaoModel = require("../models/CorrecaoQuestaoModel");

module.exports = {
    async Listar(req, res) {
        try {
            console.log(req.params);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    },
    
    async ObterItem(req, res) {
        try {
            console.log(req.params);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Criar(req, res) {
        const {id_questao, id_atividade, id_criterio, id_correcao, pontuacao, descricao_correcao} = req.body;

        try {
            if(id_questao || id_atividade || id_criterio || id_correcao || correcao || descricao_correcao != null) {
                const correcao_questao = await CorrecaoQuestaoModel.create({id_questao, id_atividade, id_criterio, id_correcao, pontuacao, descricao_correcao});
                res.status(201).json({correcao_questao});
            } else {
                res.status(400).json({message: "Erro na criação. Dados inconsistentes ou faltantes."});
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Atualizar(req, res) {
        const {id} = req.params
        const {id_questao, id_atividade, id_criterio, id_correcao, pontuacao, descricao_correcao} = req.body;

        try {
            const correcao_questao = await CorrecaoQuestaoModel.findByPk(id);

            if(correcao_questao) {
                correcao_questao = await correcao_questao.update({id_questao, id_atividade, id_criterio, id_correcao, pontuacao, descricao_correcao});
                return (res.status(201).json({correcao_questao}));
            } else {
                return (res.status(400).json({message: "Ocorreu um erro na atualização"}));
            }
            
        } catch (error) {
            console.log(error);

            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Deletar(req, res) {
        try {

        } catch (error) {
            
        }
    }
};