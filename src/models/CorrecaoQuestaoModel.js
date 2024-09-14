const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const CorrecaoQuestao = database.define('CorrecaoQuestao', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    id_questao: {
        type: DataTypes.INTEGER, 
        references: 'Questao', 
        referenceKey: 'id'
    }, 
    id_atividade: {
        type: DataTypes.INTEGER, 
        references: 'Atividade', 
        referenceKey: 'id'
    }, 
    id_criterio: {
        type: DataTypes.INTEGER, 
        references: 'Criterios', 
        referenceKey: 'id'
    },  
    id_correcao: {
        type: DataTypes.INTEGER, 
        references: 'Correcao', 
        referenceKey: 'id'
    }, 
    pontuacao: {
        type: DataTypes.FLOAT, 
        allowNull: true
    }, 
    descricao_correcao: {
        type: DataTypes.STRING, 
        allowNull: true
    }
});

module.exports = CorrecaoQuestao;