const express = require('express');
const fs = require('node:fs/promises');
const sequelize = require('./src/dbconfig.js');

const alunoRouter = require('./src/routes/AlunoRouter.js');
const turmaRouter = require('./src/routes/TurmaRouter.js');
const atividadeAlunoRouter = require('./src/routes/AtividadeAlunoRouter.js');
const atividadeRouter = require('./src/routes/AtividadeRouter.js');
const correcaoQuestaoRouter = require('./src/routes/CorrecaoQuestaoRouter.js');
const correcaoRouter = require('./src/routes/CorrecaoRouter.js');
const criterioRouter = require('./src/routes/CriterioRouter.js');
const criterioQuestaoRouter = require('./src/routes/CriteriosQuestaoRouter.js');
const questaoRouter = require('./src/routes/QuestaoRouter.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/aluno', alunoRouter);
app.use('/turma', turmaRouter);
app.use('/atividadeAluno', atividadeAlunoRouter);
app.use('/atividade', atividadeRouter);
app.use('/correcaoQuestao', correcaoQuestaoRouter);
app.use('/correcao', correcaoRouter);
app.use('/criterio', criterioRouter);
app.use('/criterioQuestao', criterioQuestaoRouter);
app.use('/questao', questaoRouter);


app.listen(PORT, async () => {
  console.log("API started");
});