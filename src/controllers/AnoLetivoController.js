const AnoLetivoModel = require('../models/AnoLetivoModel.js');

module.exports = {
    async Listar(req, res) {
        try {
            const anoLetivo = await AnoLetivoModel.findAll();
            return(res.status(201).json(anoLetivo));
        } catch (error) {
            return(res.status(500).json({message: "Erro" + error}))
        }
    },

    async ObterItem(req, res) {
        const id  = req.params.id;

        try {
            const anoLetivo = await AnoLetivoModel.findByPk(id);

            if(anoLetivo) {
                return(res.status(201).json(anoLetivo));
            } else {
                return(res.status(400).json({message: "Erro na solicitação"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor"}));
        }
    },

    async Criar(req, res) {
        const {ano} = req.body;
        console.log(ano);
        try {
            const anoLetivo = await AnoLetivoModel.create({ano: ano});
            return(res.status(201).json(anoLetivo));
        } catch (error) {
            return(res.status(500).json({message: "Erro" + error}));
        }
    },

    async Atualizar(req, res) {
        let id = req.params.id;
        const {ano} = req.body;
        try {
            let anoLetivo = await AnoLetivoModel.findByPk(id);

            if(anoLetivo) {
                anoLetivo = await anoLetivo.update({ano: ano});
                return(res.status(201).json(anoLetivo));
            } else {
                return(res.status(400).json({message: "Erro no processamento da requisição!"}));
            }
            
            return(res.status(100).json(anoLetivo));
        } catch (error) {
            return(res.status(200).json({message: "Erro" + error}));
        }
    }, 

    async Deletar(req, res) {
        const id = req.params.id;
        console.log(req.params);

        try {
            const anoLetivo = await AnoLetivoModel.findByPk(id);

            if(anoLetivo) {
                await anoLetivo.destroy();
                return(res.status(201).json({message: "Objeto deletado com sucesso!"}));
            } else {
                return(res.status(400).json({message: "Erro no processamento da requisição"}));
            }
            
        } catch (error) {
            return(res.status(500).json({message: "Erro" + error}));
        }
    }
};