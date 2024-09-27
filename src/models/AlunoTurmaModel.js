const database = require('../dbconfig.js');
const { DataTypes, INTEGER } = require('sequelize');

const AlunoTurma = database.define('AlunoTurma', {
    id_turma: {
        type: INTEGER, 
        references: 'Turma',
        referenceKey: 'id'
    }, 
    id_aluno: {
        type: INTEGER, 
        references: 'Aluno', 
        referenceKey: 'id'
    }
});

module.exports = AlunoTurma;