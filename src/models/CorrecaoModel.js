const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Correcao = database.define('Correcao', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    id_atividade: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Atividade', 
            key: 'id'
        }
    }, 
    id_aluno: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Aluno', 
            key: 'id'
        }
    }, 
    /*id_turma: {
        type: DataTypes.INTEGER, 
        references: 'Turma', 
        referenceKey: 'id'
    },*/ 
    pontuacao: {
        type: DataTypes.FLOAT, 
        allowNull: true
    }
}, {
    tableName: 'correcao', 
    freezeTableName: true,
    timestamps: false
});

module.exports = Correcao;