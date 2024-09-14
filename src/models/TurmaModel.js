const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Turma = database.define('turma', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    identificacao: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: "turma", 
    timestamps: false
}
);

module.exports = Turma;