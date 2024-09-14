const { DataTypes} = require('sequelize');
const database = require('../dbconfig');

const Atividade = database.define('Atividade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    data_entrega: {
        type: DataTypes.DATE,
        allowNull: true
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Atividade;