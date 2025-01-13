const ItemCriterioModel = require('../models/ItemCriterioModel');

module.exports = {
    async Obter(req, res) {
        const x = req.query.id_criterio;

        try {
            let registro;
            if (x) {
                registro = await ItemCriterioModel.findAll({ where: { id_criterio: x } });
            } else {
                registro = await ItemCriterioModel.findAll();
            }

            if (registro) {
                return (res.status(201).json(registro));
            } else {
                return (res.status(200).json({ message: "Sem registros!" }));
            }
        } catch (error) {
            return (res.status(500).json({ message: "erro interno do servidor" + error }));
        }
    },

    async ObterItem(req, res) {
        try {

        } catch (error) {

        }
    },

    async Criar(req, res) {
        console.log(req.body);

        if (!Array.isArray(req.body)) {
            console.log("registro único de item!");
            const { id_criterio, descricao, valor } = req.body;

            try {
                const registro = await ItemCriterioModel.create({ id_criterio: id_criterio, descricao: descricao, valor: valor });
                return (res.status(201).json(registro));
            } catch (error) {
                return (res.status(500).json({ message: "Erro no processamento da requisição" + error }));
            }
        } else {
            console.log("registro do tipo array/bulk")
            const dados = req.body;

            try {
                const registro = await ItemCriterioModel.bulkCreate(dados);
                console.log(registro);
                return res.status(201).json(registro);
            } catch (error) {
                return (res.status(500).json({ message: "Erro no processamento da requisição" + error }));
            }
        }
    },

    async Atualizar(req, res) {
        const { id } = req.params;
        const { id_criterio, descricao, ordem } = req.body;

        try {
            const registro = await ItemCriterioModel.findByPk(id);

            if (registro) {
                registro = registro.update({ id_criterio: id_criterio, descricao: descricao, ordem: ordem });
                return (res.status(201).json(registro));
            } else {
                return (res.status(400).json({ message: "Erro no processamento da requisição." }));
            }
        } catch (error) {
            return (res.status(500).json({ message: "Erro interno do servidor" + error }));
        }
    },

    async Deletar(req, res) {
        const { id } = params.id;

        try {
            const registro = await ItemCriterioModel.findByPk(id);

            if (registro) {
                registro.destroy();
                return (res.status(201).json({ message: "Objeto excluído com sucesso dos registros." }));
            } else {
                return (res.status(401).json({ message: "Erro ao excluir o objeto. Objeto não encontrado" }));
            }
        } catch (error) {
            return (res.status(500).json({ message: "Erro interno do sertvidor" + error }));
        }
    }
};