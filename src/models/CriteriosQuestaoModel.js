const { DataTypes } = require('sequelize');
const database = require('../dbconfig.js');

const CriteriosQuestao = database.define('CriteriosQuestao', {
    id_questao: {
        type: DataTypes.INTEGER,
        references: 'Questao',
        referenceKey: 'id'
    }, 
    id_criterio: {
        type: DataTypes.INTEGER, 
        references: 'Criterio', 
        referenceKey: 'id'
    }
}, {
    tableName: 'criterio_questao',
    timestamps: false
});

module.exports = CriteriosQuestao;