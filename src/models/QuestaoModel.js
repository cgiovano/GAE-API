const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Questao = database.define('Questao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    id_atividade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Atividade',
        referenceKey: 'id'
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
    tableName: 'questao',
    timestamps: false
});

module.exports = Questao;