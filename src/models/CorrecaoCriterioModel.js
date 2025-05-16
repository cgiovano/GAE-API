const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const CorrecaoCriterio = database.define('CorrecaoItemCriterio', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    id_correcao_questao: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'CorrecaoQuestao', 
            key: 'id'
        }
    }, 
    id_item_criterio: {
        type: DataTypes.INTEGER, 
        allowNull: true,
        references: {
            model: 'ItemCriterio', 
            key: 'id'
        }
    }, 
    id_criterio: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Criterio',
            key: 'id'
        }
    },
    id_correcao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Correcao',
            key: 'id'
        }
    }
}, {
    tableName: 'correcao_criterio',
    freezeTableName: true,
    timestamps: false
});

module.exports = CorrecaoCriterio;