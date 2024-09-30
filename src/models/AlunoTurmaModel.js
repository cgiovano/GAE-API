const database = require('../dbconfig.js');
const { DataTypes, INTEGER } = require('sequelize');

const AlunoTurma = database.define('AlunoTurma', {
    id_turma: {
        type: INTEGER, 
        primaryKey: true,
        references: {
            model: 'Turma',
            Key: 'id'
        }
    }, 
    id_aluno: {
        type: INTEGER, 
        primaryKey: true,
        references: {
            model: 'Aluno', 
            Key: 'id'
        }
    }
},  {
    tableName: 'aluno_turma', 
    timestamps: false, 
    freezeTableName: true
});

module.exports = AlunoTurma;