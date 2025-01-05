const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Criterio = database.define('Criterio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    numero_criterios: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    likert_scale: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
    }
}, {
    tableName: 'criterio', 
    timestamps: false
});

module.exports = Criterio;