const CriterioModel = require("../models/CriterioModel");
const CriterioService = require("../services/CriterioService");

module.exports = {
    async Listar(req, res) {
        try {
            const criterios = await CriterioModel.findAll();
            return (res.status(201).json(criterios));
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async ListarCriterioPorQuestao(req, res) {
        const id_questao = req.params.id;

        try {
            const questao = await CriterioService.ListarCriterioPorQuestao(id_questao);
            return(res.status(201).json(questao));
        } catch (error) {
            res.status(500).send({message: "Erro interno do servidor."});
        }
    },


    async ObterItem(req, res) {
        const {id} = req.params;
        console.log(id);

        try {
            const criterio = await CriterioModel.findByPk(id);

            if(criterio) {
                return (res.status(201).json(criterio));
            } else {
                return (res.status(500).json("Erro. Não foi possível encontrar o item."));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno de servidor." + error});
        }
    }, 

    async Criar(req, res) {
        const {descricao, numero_criterios, isLikert} = req.body;

        try {
            const criterio = await CriterioModel.create({descricao: descricao, numero_criterios: numero_criterios, likert_scale: isLikert});
            return (res.status(201).json(criterio));
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor." + error});
        }
    }, 

    async Atualizar(req, res) {
        const {id} = req.params;
        const {descricao, valor} = req.body;

        try {
            const criterio = await CriterioModel.findByPk(id);
            if(criterio) {
                criterio = await criterio.update({descricao: descricao, valor: valor});
                return (res.status(201).json(criterio));
            } else {
                return (res.status(500).json({message: "Erro. Objeto não encontrado."}));
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Deletar(req, res) {
        const {id} = req.params;

        try {
            const criterio = await CriterioModel.findByPk(id);

            if(criterio) {
                await CriterioModel.destroy({where: {id: id}});
                return (res.status(201).json({message: "Deletado com sucesso."}))
            } else {
                return(res.status(500).json({message: "Erro. Não foi possível deletar o objeto."}));
            }
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
} 