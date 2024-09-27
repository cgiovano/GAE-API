const database = require('../dbconfig.js');
const { DataTypes } = require('sequelize');

const AnoLetivo = database.define('AnoLetivo', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    }, 
    ano: {
        type: DataTypes.STRING, 
        allowNull: false
    }
},  {
    tableName: 'ano_letivo',
    timestamps: false
});

module.exports = AnoLetivo;