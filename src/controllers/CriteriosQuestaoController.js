const CriteriosQuestaoModel = require("../models/CriteriosQuestaoModel");
const CriterioModel = require("../models/CriterioModel");

module.exports = {
    async ListarCriterioPorQuestao(req, res) {
        //Precisa mudar a forma de obter os criterio para também obter por atividade!
        const {id} = req.params;
        console.log(id  );
        try {
            const criterio_questao = await CriteriosQuestaoModel.findAll({ where: { id_questao: id} });
            console.log(criterio_questao);
            const criteriosIds = criterio_questao.map(cq => cq.id_criterio);
            console.log(criteriosIds);
            
            if (criterio_questao) {
                const criterios = await CriterioModel.findAll({where: {id: criteriosIds}});
                return (res.status(201).json(criterios));
            } else {
                return(res.status(401).json({message: "não existem itens registrados para a questão"}));
            } 
            

        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    },

    async ObterItem(req, res) {
        const id_questao = req.query.id_questao;
        const id_atividade = req.query.id_atividade;

        try {
            if (id_questao != undefined) {
                const criterio_questao = await CriteriosQuestaoModel.findAll({ where: { id_questao: id_questao } });
                return (res.status(201).json(criterio_questao));
            } else if(id_atividade != undefined) {
                const criterio_questao = await CriteriosQuestaoModel.findAll({where: {id_atividade: id_atividade}});
                return (res.status(201).json(criterio_questao));
            }

        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    },

    async Criar(req, res) {
        if (!Array.isArray(req.body)) {
            console.log("nao é array");
            const { id_questao, id_criterio, id_atividade } = req.body;

            try {
                const criterio_questao = await CriteriosQuestaoModel.create({ id_questao, id_criterio, id_atividade });
                return (res.status(201).json(criterio_questao));

            } catch (error) {
                res.status(500).json({ message: "Erro interno do servidor" });
            }
        } else {
            console.log("e array");
            const dados = req.body;
            try {
                const registro = await CriteriosQuestaoModel.bulkCreate(dados);
                console.log(registro);
            } catch (error) {
                res.status(500).json({ message: "Erro interno do servidor" });
            }
        }
    },

    //Só precisa atualizar, efetivamente, o id_criterio
    async Atualizar(req, res) {
        const { id_questao, id_criterio, novo_id_criterio } = req.body;

        if (Array.isArray(req.body)) {
            const dados = req.body;

            dados.forEach(async item => {
                const { id_questao, id_criterio, novo_id_criterio } = item;
                const criterio_questao = await CriteriosQuestaoModel.findOne({ where: { id_questao: id_questao, id_criterio: id_criterio } });

                if (criterio_questao) {
                    await criterio_questao.update({ id_criterio: novo_id_criterio });
                    return (res.status(200).json(criterio_questao));
                }
            });
        }

        try {
            if (id_questao != null) {
                const criterio_questao = await CriteriosQuestaoModel.findOne({ where: { id_questao: id_questao, id_criterio: id_criterio } });

                if (criterio_questao) {
                    await criterio_questao.update({ id_criterio: novo_id_criterio });
                    return (res.status(200).json(criterio_questao));
                }
            }

            return (res.status(400).json({ message: "Erro na operação." }));
        } catch (error) {
            return (res.status(500).json({ message: "Erro interno do servidor" + error }));
        }
    },

    async Deletar(req, res) {
        console.log(req.body);

        if (Array.isArray(req.body)) {
            let dados = req.body

            dados.forEach(async dado => {
                try {
                    if (dado.id_questao !== null && dado.id_criterio !== null) {
                        const criterio_questao = await CriteriosQuestaoModel.findOne({ where: { id_questao: dado.id_questao, id_criterio: dado.id_criterio } });
    
                        if (criterio_questao) {
                            await criterio_questao.destroy();
                            return (res.status(200).json({ message: "Deletado com sucesso!" }));
                        }
                    }
    
                    return (res.status(400).json({ message: "Erro na operação." }));
                } catch (error) {
                    return (res.status(500).json({ message: "Erro interno do servidor" + error }));
                }
            });
            
        } else {
            const { id_questao, id_criterio } = req.body;

            try {
                if (id_questao != null && id_atividade != null && id_criterio) {
                    const criterio_questao = await CriteriosQuestaoModel.findOne({ where: { id_questao: id_questao, id_criterio: id_criterio } });

                    if (criterio_questao) {
                        await criterio_questao.destroy();
                        return (res.status(200).json({ message: "Deletadoc com sucesso!" }));
                    }
                }

                return (res.status(400).json({ message: "Erro na operação." }));
            } catch (error) {
                return (res.status(500).json({ message: "Erro interno do servidor" + error }));
            }
        }
    }
}