const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const CorrecaoQuestao = database.define('CorrecaoQuestao', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    /*id_atividade: {
        type: DataTypes.INTEGER, 
        references: 'Atividade', 
        referenceKey: 'id'
    },*/ 
    id_correcao: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Correcao', 
            key: 'id'
        }
    }, 
    id_questao: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Questao', 
            key: 'id'
        }
    }, 
    pontuacao: {
        type: DataTypes.FLOAT, 
        allowNull: true
    }, 
    descricao_correcao: {
        type: DataTypes.STRING, 
        allowNull: true
    }
}, {
    tableName: 'correcao_questao',
    freezeTableName: true,
    timestamps: false
});

module.exports = CorrecaoQuestao;