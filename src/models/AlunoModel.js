const { DataTypes } = require('sequelize');
const database = require('../dbconfig.js');
const Atividade = require('./AtividadeModel.js');
const AtividadeAluno = require('./AtividadeAlunoModel.js');

const Aluno = database.define('Aluno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'aluno',
    timestamps: false,
    freezeTableName: true
});

module.exports = Aluno;