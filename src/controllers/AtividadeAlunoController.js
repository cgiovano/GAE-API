const AtividadeAlunoModel = require("../models/AtividadeAlunoModel");
const AlunoModel = require("../models/AlunoModel");
const AtividadeModel = require("../models/AtividadeModel");

module.exports = {
    async Listar(req, res) {
        try {
            const atividades = await AtividadeAlunoModel.findAll();
            return (res.status(201).json(atividades));
        } catch (error) {
            return (res.status(500).json({ message: "Erro interno do servidor!" }));
        }
    },

    //É possível usar o modelo de aluno e atividade para fazer uma busca e filtrar com base no nome do aluno ou da atividade. Por exemplo
    // Poderia passar como parametro da requisição o nome do aluno e buscar o nome na base dos alunos e retornar o id, para assim, poder "filtrar" os resultados com base no id do aluno
    // o mesmo vale para a atividade. Poderia procurar pelo nome da atividade e retornar o id dela.
    async ListarAssociacao(req, res) {
        let id_atividade = req.query.id_atividade;
        console.log(req.query);
        try {
            if (id_atividade) {
                const atividade_aluno = await AtividadeAlunoModel.findAll({ where: { id_atividade: id_atividade } });
                return (res.status(201).json(atividade_aluno));
            } else {
                return (res.status(400).json({ message: "Erro no processamento" }))
            }

        } catch (error) {
            return (res.status(500).json({ message: "erro interno do servidor" }))
        }
    },

    async Criar(req, res) {
        if (Array.isArray(req.body)) {
            let dados = req.body;
            try {
                const atividadeAluno = await AtividadeAlunoModel.bulkCreate(dados);
                return (res.status(201).json(atividadeAluno));
            } catch (error) {
                return res.status(500).json({ message: "Erro interno do servidor." });
            }
        } else {
            const { id_atividade, id_aluno } = req.body;

            try {
                const atividadeAluno = await AtividadeAlunoModel.create({ id_atividade: id_atividade, id_aluno: id_aluno });
                return (res.status(201).json(atividadeAluno));
            } catch (error) {
                return res.status(500).json({ message: "Erro interno do servidor." });
            }
        }
    },

    //VERIFICAR LÓGICA DEPOIS (NÃO TEM PK) - INCOMPLETO
    // possível solução é passar no corpo da requisição os dados do objeto que se mudar e também passar como parâmetros da requisição os novos dados
    async Atualizar(req, res) {
        const { id_atividade, id_aluno, id_turma, novo_id_atividade, novo_id_aluno, novo_id_turma } = req.body;

        try {
            const atividadeAluno = await AtividadeAlunoModel.findOne({ where: { id_atividade: id_atividade, id_aluno: id_aluno, id_turma: id_turma } });

            if (atividadeAluno) {
                atividadeAluno.update({ id_atividade: novo_id_atividade, id_aluno: novo_id_aluno, id_turma: novo_id_turma });
                return (res.status(201).json(atividadeAluno));
            } else {
                return (res.status(400).json({ message: "Erro no processamento" }));
            }
        } catch (error) {
            return (res.status(500).json({ message: "Erro interno do servidor" }));
        }
    },

    async Deletar(req, res) {
        if (Array.isArray(req.body)) {
            let dados = req.body;

            dados.forEach(async dado => {
                try {
                    const atividadeAluno = await AtividadeAlunoModel.findOne({ where: { id_atividade: dado.id_atividade, id_aluno: dado.id_aluno } });

                    if (atividadeAluno) {
                        await atividadeAluno.destroy();
                        //return res.status(201).json({ message: "Objeto deletado com sucesso!" });
                    }
                } catch (error) {
                    return res.status(400).json({ message: "Erro no servidor" + error });
                }
            });
        } else {

            const { id_atividade, id_aluno } = req.body;

            try {
                const atividadeAluno = await AtividadeAlunoModel.findOne({ where: { id_atividade: id_atividade, id_aluno: id_aluno } });

                if (atividadeAluno) {
                    await atividadeAluno.destroy();
                    return (res.status(201).json({ message: "Objeto deletado com sucesso!" }));
                } else {
                    return (res.status(400).json({ message: "Ocorreu um erro no processamento" }));
                }
            } catch (error) {
                return (res.status(500).json({ message: "Erro interno do servidor." }));
            }
        }


    }
};