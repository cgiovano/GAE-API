const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const AtividadeAluno = database.define('AtividadeAluno', {
    id_atividade: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        references: {
            model: 'Atividade', 
            key: 'id'
        }
    }, 
    id_aluno: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        references: {
            model: 'Aluno',
            key: 'id'
        }
    }
},  {
    tableName: 'atividade_aluno',
    timestamps: false,
    freezeTableName: true
});

module.exports = AtividadeAluno;