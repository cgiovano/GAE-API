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
            turma = TurmaModel.findByPk(id);

            if(turma){
                return(res.status(201).json(turma))
            } else {
                console.log("Objeto não encontrado");
                res.json( { message: "Objeto não encontrado" } )
            }
            res.end();
        } catch (error) {
            
        }
    },
    async Criar(req, res) {
        const {identificacao, ano} = req.body;
        console.log(JSON.stringify(req.body));

        try {
            const turma = await TurmaModel.create({identificacao, ano});
            res.status(200).json(turma);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor"});
        }
    },
    async Atualizar(req, res) {
        const {id} = req.params;
        const {identificacao, ano} = req.body;

        try {
            const turma = await TurmaModel.findByPk(id);
            if (turma) {
                turma = await turma.update({identificacao: identificacao, ano: ano});
                res.status(201).json(turma);
                res.end;
            } else {
                req.status(500).json({message: "Erro! Falha ao atualizar."});
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
                await turma.destroy({where: {id: id}}).then(res.status(201)).catch(res.status(500).json({message: "Erro ao deletar o objeto!"}));
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }
};