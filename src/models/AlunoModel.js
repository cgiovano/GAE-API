const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Aluno = database.define('aluno', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    id_turma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'turma', 
            referencesKey: 'id'
        }
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