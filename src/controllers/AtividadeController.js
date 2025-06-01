const Atividade = require("../models/AtividadeModel");
const AtividadeModel = require("../models/AtividadeModel");

module.exports = {
    async Listar(req, res) {
        try {
            const atividades = await AtividadeModel.findAll();
            return (res.status(201).json(atividades));
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async ObterItem(req, res) {
        const {id} = req.params;

        try {
            const atividade = await AtividadeModel.findByPk(id);

            if(atividade) {
                return (res.status(201).json(atividade));
            } else {
                return (res.status(500).json({message: "Erro. Item não encontrado."}));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Criar(req, res) {
        const {descricao, data_inicio, data_fim, valor, nota_calculada_soma, numero_questoes} = req.body;

        try {
            const atividade = await AtividadeModel.create({descricao: descricao, data_inicio: data_inicio, data_fim: data_fim, valor: valor, nota_calculada_soma: nota_calculada_soma, numero_questoes: numero_questoes});
            return (res.status(201).json(atividade));
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Atualizar(req, res) {
        const {id} = req.params;
        const {descricao, data_criacao, data_entrega, valor} = req.body;

        try {
            const atividade = await AtividadeModel.findByPk(id);

            if(atividade) {
                atividade = await atividade.update({descricao: descricao, data_criacao: data_criacao, data_entrega: data_entrega, valor: valor});
                return (res.status(201).json(atividade));
            } else {
                return (res.status(500).json({message: "Erro. Item não encontrado."}));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    async Deletar(req, res) {
        const {id} = req.params;
        console.log(id);

        try {
            const atividade = await AtividadeModel.findByPk(id);
            console.log(id);
            if(atividade) {
                await AtividadeModel.destroy({where: {id: id}});
                return (res.status(201).json({message: "Item deletado."}));
            } else {
                return (res.status(500).json({message: "Erro. Item não encontrado."}));
            }
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
};