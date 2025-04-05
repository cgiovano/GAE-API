const AlunoModel = require('../models/AlunoModel.js');
const AtividadeAluno = require('../models/AtividadeAlunoModel.js');
const Atividade = require('../models/AtividadeModel.js');

module.exports = {
    async Listar(req, res) {
        try {
            const alunos = await AlunoModel.findAll();
            //res.json(alunos);
            return (res.json(alunos));
        } catch (error) {
            console.log(error);
            //res.status(500).json( {message: "Erro interno no servidor."} );
        }  
    },

    async ListarAlunosPorAtividade(req, res) {
        let idAtividade = req.params.id;
        console.log(idAtividade);

        try {
            let alunosComAtividades = await AlunoModel.findAll({include: {model: Atividade, where: {id: idAtividade}, through: {attributes: []}}});

            console.log(alunosComAtividades);
            if(alunosComAtividades) {
                
                return(res.status(200).json(alunosComAtividades))
            } else {
                return(res.status(400).json({message: 'Não foram encontrados alunos com a atividade especificada'}));
            }
        } catch(error) {
            console.log(error);
        }
    },

    async Criar(req, res) {
        const {nome} = req.body;
  
        try {
            const aluno = await AlunoModel.create( {nome: nome} );
            return(res.status(201).json(aluno));
        }catch (error) {
            console.log(error);
            res.status(500).json( {message: "erro no servidor"} );
        }
    }, 

    async ObterItem(req, res) {
        let id = req.params.id;
        console.log(req.params);

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
        let id = req.params.id;
        const {nome} = req.body;

        try {
            let aluno = await AlunoModel.findByPk(id);
            if(aluno) {
                aluno = await aluno.update( {nome: nome} );
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
        let {id} = req.params
        console.log(req.params);

        try{
            const aluno = await AlunoModel.findByPk(id)
            if(aluno) {
                aluno.destroy();
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