const {DataTypes} = require('sequelize');
const database = require('../dbconfig.js');

const Turma = database.define('Turma', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 
    identificacao: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    serie: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    ano_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'AnoLetivo',
            key: 'id'
        }
    }
}, {
    tableName: "turma", 
    timestamps: false
}
);

module.exports = Turma;