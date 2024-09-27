const { DataTypes } = require('sequelize');
const database = require('../dbconfig.js');

const AlunoTurmaModel = database.define('AlunoTurma', {
    id_turma: {
        type: DataTypes.INTEGER, 
        references: 'Turma', 
        referenceKey: 'id'
    }, 
    id_aluno: {
        type: DataTypes.INTEGER, 
        references: 'Aluno', 
        referenceKey: 'id'
    }
});

module.exports = AlunoTurmaModelx;