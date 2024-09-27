const TurmaModel = require("../models/TurmaModel.js");

module.exports = {
    async Listar(req, res) {
        try {
            const turmas = await TurmaModel.findAll();
            return (res.status(201).json(turmas));
        } catch (error) {
            console.log(error);
            res.json({ message: "Erro interno no servidor!" });
        }

        res.end();
    },
    async ObterItem(req, res) {
        const {id} = req.params;

        try {
            const turma = await TurmaModel.findByPk(id);

            if(turma){
                return(res.status(201).json(turma))
            } else {
                console.log("Objeto não encontrado");
                res.json( { message: "Objeto não encontrado" } )
            }
        } catch (error) {
            
        }
    },
    async Criar(req, res) {
        const {identificacao, serie, ano_id} = req.body;
        console.log(req.body);

        try {
            const turma = await TurmaModel.create({identificacao: identificacao, serie: serie, ano_id: ano_id});
            console.log(turma);
            return(res.status(201).json(turma));
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor"});
        }
    },
    async Atualizar(req, res) {
        const {id} = req.params;
        const {identificacao, serie, ano_id} = req.body;
        console.log(req.body);

        try {
            let turma = await TurmaModel.findByPk(id);
            if (turma) {
                turma = await turma.update({identificacao: identificacao, serie: serie, ano_id: ano_id});
                console.log(turma);
                return(res.status(201).json(turma));
            } else {
                return(req.status(500).json({message: "Erro! Falha ao atualizar."}));
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor"});
        }
    },
    async Deletar(req, res) {
        const {id} = req.params;

        try {
            const turma = await TurmaModel.findByPk(id);

            if(turma) {
                await turma.destroy();
                return(res.status(201).json({message: "Objeto deletado com sucesso"}))
            } else {
                return(res.status(400).json({message: "Erro no processamento da requisição"}));
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
};