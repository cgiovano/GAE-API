const { DataTypes } = require('sequelize');
const database = require('../dbconfig.js');

const CriteriosQuestao = database.define('CriteriosQuestao', {
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
        references: 'Criterio', 
        referenceKey: 'id'
    }
});

module.exports = CriteriosQuestao;