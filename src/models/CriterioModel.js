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
    valor: {
        type: DataTypes.FLOAT, 
        allowNull: false
    }
});

module.exports = Criterio;