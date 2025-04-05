const { DataTypes } = require('sequelize');
const database = require('../dbconfig');
const Aluno = require('./AlunoModel');
const AtividadeAluno = require('./AtividadeAlunoModel');


const Atividade = database.define('Atividade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_inicio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_fim: {
        type: DataTypes.STRING,
        allowNull: true
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    numero_questoes: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'atividade',
    timestamps: false,
    freezeTableName: true
});

module.exports = Atividade;