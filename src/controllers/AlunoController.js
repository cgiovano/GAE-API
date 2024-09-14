const AlunoModel = require('../models/AlunoModel.js');

module.exports = {
    async Listar(req, res) {
        try {
            res.json({message: req.params});
            const alunos = await AlunoModel.findAll();
            return (res.json(alunos));
        } catch (error) {
            console.log(error);
            res.status(500).json( {message: "Erro interno no servidor."} );
        }  
    },

    async Criar(req, res) {
        const {id_turma, nome} = req.body;
  
        try {
            const aluno = await AlunoModel.create( {id_turma, nome} );
            return(res.status(201).json(aluno));
        }catch (error) {
            console.log(error);
            res.status(500).json( {message: "erro no servidor"} );
        }
    }, 

    async ObterItem(req, res) {
        let id = req.params;

        try {
            const aluno = await AlunoModel.findByPk(id);

            if(aluno)
                return(res.status(200).json(aluno));
            else
                return(res.status(500).json({ message: "Erro. Não foi possível encontrar o objeto especificado!"}));
        } catch (error) {
            console.log(error);
        }
    },

    async Atualizar(req, res) {
        let id = req.params;
        const {turma, nome} = req.body;

        try {
            let aluno = await AlunoModel.findByPk(id);
            if(aluno) {
                aluno = aluno.update( {turma: turma, nome: nome} );
                return(res.status(200).json(aluno));
            } else {
                return(res.status(500).json( {message: "Não foi possível atualizar. Objeto não encontrado!"} ));
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "erro no servidor" });
        }
    }, 

    async Deletar(req, res) {
        let id = req.params;

        try{
            const aluno = AlunoModel.findByPk(id)
            if(aluno) {
                await AlunoModel.destroy({where: {id: id}});
                return res.status(200).json({message: "objeto deletado com sucesso!"});
            }
            else {
                return res.status(500).json({ message: "Falha ao deletar! Objeto não encontrado!" });
            }
        } catch(error) {
            return res.status(500).json({ message: "erro interno no servidor." });
        }
    }
}