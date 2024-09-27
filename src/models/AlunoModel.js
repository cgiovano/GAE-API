const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Aluno = database.define('Aluno', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "aluno", 
    timestamps: false
});

module.exports = Aluno;