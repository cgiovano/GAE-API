const { DataTypes } = require('sequelize');
const database = require('../dbconfig.js');
const Criterio = require('./CriterioModel.js');

const CriteriosQuestao = database.define('CriteriosQuestao', {
    id_questao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Questao',
            key: 'id'
        }
    }, 
    id_criterio: {
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        references: {
            model: 'Criterio', 
            key: 'id'
        }
    }
}, {
    tableName: 'criterio_questao',
    timestamps: false
});

module.exports = CriteriosQuestao;