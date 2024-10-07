const database = require('../dbconfig');
const { DataTypes } = require('sequelize');

const ItemCriterio = database.define('ItemCriterio', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    id_criterio: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'Criterio', 
            key: 'id'
        }
    }, 
    descricao: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    valor: {
        type: DataTypes.FLOAT, 
        allowNull: false
    }
}, {
    modelName: 'item_criterio', 
    timestamps: false
});

module.exports = ItemCriterio;