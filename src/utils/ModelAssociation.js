const Aluno = require("../models/AlunoModel");
const AtividadeAluno = require("../models/AtividadeAlunoModel");
const Atividade = require("../models/AtividadeModel");
const Criterio = require("../models/CriterioModel");
const CriteriosQuestao = require("../models/CriteriosQuestaoModel");
const Questao = require("../models/QuestaoModel");


const ModelAssociation = {
    Init() {
        Aluno.belongsToMany(Atividade, {
            through: AtividadeAluno, 
            foreignKey: 'id_aluno',
            otherKey: 'id_atividade'
        });
    
        Atividade.belongsToMany(Aluno, {
            through: AtividadeAluno, 
            foreignKey: 'id_atividade', 
            otherKey: 'id_aluno'
        });

        Criterio.belongsToMany(Questao, {
            through: CriteriosQuestao,
            foreignKey: 'id_criterio',
            otherKey: 'id_questao'
        });

        Questao.belongsToMany(Criterio, {
            through: CriteriosQuestao, 
            foreignKey: 'id_questao',
            otherKey: 'id_criterio'
        });

        
    }
}

module.exports = ModelAssociation;