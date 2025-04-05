const Aluno = require("./AlunoModel");
const AtividadeAluno = require("./AtividadeAlunoModel");
const Atividade = require("./AtividadeModel");


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
        })
    }
}

module.exports = ModelAssociation;