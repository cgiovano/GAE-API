const AtividadeAlunoModel = require("../models/AtividadeAlunoModel");
const AlunoModel = require("../models/AlunoModel");
const AtividadeModel = require("../models/AtividadeModel");

module.exports = {
    async Listar(req, res) {

        try {
            const atividades = AtividadeAlunoModel.findAll();
            return (res.status(201).json(atividades));   
        } catch (error) {
            
        }
    }, 

    //É possível usar o modelo de aluno e atividade para fazer uma busca e filtrar com base no nome do aluno ou da atividade. Por exemplo
    // Poderia passar como parametro da requisição o nome do aluno e buscar o nome na base dos alunos e retornar o id, para assim, poder "filtrar" os resultados com base no id do aluno
    // o mesmo vale para a atividade. Poderia procurar pelo nome da atividade e retornar o id dela.
    async ObterItem(req, res) {
        try {
            const nome_aluno = req.body.nome_aluno;
            const nome_atividade = req.body.nome_atividade;

            if(nome_aluno) {
                const aluno = await AlunoModel.findOne({where: {nome: nome_aluno}});
                const atividade_aluno = await AtividadeAlunoModel.findAll({where: {id_aluno: aluno.id}});
                return(res.status(201).json({atividade_aluno}));
            } else {
                if(nome_atividade) {
                    const atividade = await AtividadeModel.findOne({where: {nome: nome_atividade}});
                    const atividade_aluno = await AtividadeAlunoModel.findAll({where: {id_atividade: atividade.id}});
                    return(res.status(201).json({atividade_aluno}));
                } else {
                    return(res.status(400).json({message:"Erro no processamento"}))
                }
            }

        } catch (error) {
            return(res.status(500).json({message: "erro interno do servidor"}))
        }
    },

    async Criar(req, res) {
        const {id_atividade, id_aluno} = req.body;

        try {
            const atividadeAluno = AtividadeAlunoModel.create({id_atividade: id_atividade, id_aluno: id_aluno});
            return (res.status(201).json(atividadeAluno));
        } catch (error) {
            res.status(500).json({message: "Erro interno do servidor."});
        }
    }, 

    //VERIFICAR LÓGICA DEPOIS (NÃO TEM PK) - INCOMPLETO
    // possível solução é passar no corpo da requisição os dados do objeto que se mudar e também passar como parâmetros da requisição os novos dados
    async Atualizar(req, res) {
        const {id_atividade, id_aluno, id_turma, novo_id_atividade, novo_id_aluno, novo_id_turma} = req.body;

        try {
            const atividadeAluno = await AtividadeAlunoModel.findOne({where: {id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma}});

            if(atividadeAluno) {
                atividadeAluno.update({id_atividade: novo_id_atividade, id_aluno: novo_id_aluno, id_turma: novo_id_turma});
                return(res.status(201).json(atividadeAluno));
            } else {
                return(res.status(400).json({message: "Erro no processamento"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor"}));
        }
    },

    async Deletar(req, res) {
        const {id_atividade, id_aluno, id_turma} = req.body;

        try {
            const atividadeAluno = await AtividadeAlunoModel.findOne({where: {id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma}});

            if(atividadeAluno) {
                await AtividadeAlunoModel.destroy({where: {id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma}});
                return(res.status(201).json({message: "Objeto deletado com sucesso!"}));
            } else {
                return(res.status(400).json({message: "Ocorreu um erro no processamento"}));
            }
        } catch (error) {
            return(res.status(500).json({message: "Erro interno do servidor."}));
        }
    }
};