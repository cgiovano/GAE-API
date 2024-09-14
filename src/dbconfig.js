const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'ProjetoTCC',
  username: 'postgres',
  password: '6EAGLEviolao',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

// Testar conexão com o banco de dados
db.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:' + err);
    });

module.exports = db;