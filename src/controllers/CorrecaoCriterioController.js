const { Op } = require('sequelize');
const CorrecaoCriterioModel = require('../models/CorrecaoCriterioModel');
const CorrecaoService = require('../services/CorrecaoService');

module.exports = {
    async ListarItensPorCorrecao(req, res) {
        const id = req.params.id;

        try {
            const correcaoCriterio = await CorrecaoCriterioModel.findAll({ where: { id_correcao: id } });
            return (res.status(201).json(correcaoCriterio));
        } catch (error) {
            //console.log(error);
            res.status(500).json({ message: "erro interno do servidor." });
        }
    },

    async ObterItem(req, res) {
        const { id } = req.params;
        console.log(id);

        try {
            const correcaoCriterio = await CorrecaoCriterioModel.findAll({ where: { id_correcao_questao: id } })

            if (correcaoCriterio) {
                return (res.status(201).json(correcaoCriterio))
            } else {
                return (res.status(500).json({ message: "Erro. O item não foi encontrado." }));
            }

        } catch (error) {
            res.send(500).json({ message: "Erro interno do servidor." });
        }
    },

    async Criar(req, res) {
        const { id_correcao_questao, id_item_criterio, id_criterio, pontuacao } = req.body;

        try {
            const correcaoCriterio = await CorrecaoCriterioModel.create({ id_correcao_questao: id_correcao_questao, id_item_criterio: id_item_criterio, id_criterio: id_criterio, pontuacao: pontuacao });

            return (res.status(201).json(correcaoCriterio));
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erro interno do servidor." });
        }
    },

    async Atualizar(req, res) {
        const { id } = req.params;
        const { id_correcao_questao, id_item_criterio, id_criterio, pontuacao } = req.body;

        try {
            const correcaoCriterio = await CorrecaoCriterioModel.findByPk(id);

            if (correcaoCriterio) {
                correcaoCriterio = await CorrecaoCriterioModel.update({ id_correcao_questao: id_correcao_questao, id_item_criterio: id_item_criterio, id_criterio: id_criterio, pontuacao: pontuacao });
                return (res.status(201).json({ correcaoCriterio }));
            } else {
                return (res.status(500).json({ message: "Erro. O item não foi encontrado." }));
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor." });
        }
    },

    async AtualizarEmLista(req, res) {
        const dados = req.body;
        console.log(dados);

        if (Array.isArray(dados)) {
            try {
                const promiseAtualizacao = dados.map(item => {
                    CorrecaoCriterioModel.update({
                        id_correcao_questao: item.id_correcao_questao,
                        id_item_criterio: item.id_item_criterio,
                        id_criterio: item.id_criterio,
                        id_correcao: item.id_correcao,
                        valor: item.valor
                    },
                        { where: { id: item.id } });
                });

                await Promise.all(promiseAtualizacao);
                return res.status(400).json(promiseAtualizacao);
            } catch (error) {
                console.log(erro);
                return error;
            }
        }
    },

    async Deletar(req, res) {
        const { id } = req.params;

        try {
            const correcaoCriterio = await CorrecaoCriterioModel.findByPk(id);

            if (correcaoCriterio) {
                await CorrecaoCriterioModel.destroy({ where: { id: id } });
                return (res.status(201).json({ message: "Item deletado." }));
            } else {
                return (res.status(500).json({ message: "Item não encontrado." }));
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor." });
        }
    }
};