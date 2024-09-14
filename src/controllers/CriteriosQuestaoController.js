const CriteriosQuestaoModel = require("../models/CriteriosQuestaoModel");

module.exports = {
    async Listar(req, res) {
        const id_questao = req.param.id_questao;

        try {
            if(id_questao != null) {
                const criterio_questao = await CriteriosQuestaoModel.findAll({where: {id_questao: id_questao}});
                return (res.status(201).json(criterio_questao));
            }

        } catch (error) {
            res.status(400).json({messaghe: "Erro interno do servidor"});
        }
    }, 

    async ObterItem(req, res) {
        const id_questao = req.param.id_questao;

        try {
            if(id_questao != null) {
                const criterio_questao = await CriteriosQuestaoModel.findAll({where: {id_questao: id_questao}});
                return (res.status(201).json(criterio_questao));
            }

        } catch (error) {
            res.status(400).json({message: "Erro interno do servidor"});
        }
    }, 

    async Criar(req, res) {
        const {id_questao, id_atividade, id_criterio} = req.body;

        try {
            const criterio_questao = await CriteriosQuestaoModel.create({id_questao, id_atividade, id_criterio});
            return (res.status(201).json(criterio_questao));

        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor"});
        }
    }, 

    //Só precisa atualizar, efetivamente, o id_criterio
    async Atualizar(req, res) {
        const {id_questao, id_atividade, id_criterio, novo_id_criterio} = req.body;

        try {
            if(id_questao != null && id_atividade != null) {
                const criterio_questao = await CriteriosQuestaoModel.findOne({where: {id_questao: id_questao, id_atividade: id_atividade, id_criterio: id_criterio}});

                if(criterio_questao) {
                    await criterio_questao.update({id_criterio: novo_id_criterio});
                    return (res.status(200).json(criterio_questao));
                }
            }

            return (res.status(400).json({message: "Erro na operação."}));
        } catch (error) {
            return (res.status(500).json({message: "Erro interno do servidor" + error}));
        }
    }, 

    async Deletar(req, res) {
        const {id_questao, id_atividade, id_criterio} = req.body;

        try {
            if(id_questao != null && id_atividade != null && id_criterio) {
                const criterio_questao = await CriteriosQuestaoModel.findOne({where: {id_questao: id_questao, id_atividade: id_atividade, id_criterio: id_criterio}});

                if(criterio_questao) {
                    await criterio_questao.destroy();
                    return (res.status(200).json({message: "Deletadoc com sucesso!"}));
                }
            }

            return (res.status(400).json({message: "Erro na operação."}));
        } catch (error) {
            return (res.status(500).json({message: "Erro interno do servidor" + error}));
        }
    }
}