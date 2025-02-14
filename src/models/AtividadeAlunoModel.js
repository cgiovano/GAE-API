const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const AtividadeAluno = database.define('AtividadeAluno', {
    id_atividade: {
        type: DataTypes.INTEGER, 
        references: 'Atividade', 
        referenceKey: 'id'
    }, 
    id_aluno: {
        type: DataTypes.INTEGER, 
        references: 'Aluno',
        referenceKey: 'id'
    }
},  {
    tableName: 'atividade_aluno',
    timestamps: false
});

module.exports = AtividadeAluno;