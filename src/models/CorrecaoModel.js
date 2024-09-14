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
        references: 'Atividade', 
        referenceKey: 'id'
    }, 
    id_aluno: {
        type: DataTypes.INTEGER, 
        references: 'Atividade', 
        referenceKey: 'id'
    }, 
    id_turma: {
        type: DataTypes.INTEGER, 
        references: 'Turma', 
        referenceKey: 'id'
    }, 
    pontuacao: {
        type: DataTypes.FLOAT, 
        allowNull: true
    }
});

module.exports = Correcao;