const express = require('express');
const fs = require('node:fs/promises');
const sequelize = require('./src/dbconfig.js');
const cors = require('cors');

const alunoRouter = require('./src/routes/AlunoRouter.js');
const turmaRouter = require('./src/routes/TurmaRouter.js');
const atividadeAlunoRouter = require('./src/routes/AtividadeAlunoRouter.js');
const atividadeRouter = require('./src/routes/AtividadeRouter.js');
const correcaoQuestaoRouter = require('./src/routes/CorrecaoQuestaoRouter.js');
const correcaoRouter = require('./src/routes/CorrecaoRouter.js');
const criterioRouter = require('./src/routes/CriterioRouter.js');
const criterioQuestaoRouter = require('./src/routes/CriteriosQuestaoRouter.js');
const questaoRouter = require('./src/routes/QuestaoRouter.js');
const anoLetivoRouter = require('./src/routes/AnoLetivoRouter.js');
const alunoTurmaRouter = require('./src/routes/AlunoTurmaRouter.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/aluno', alunoRouter);
app.use('/turma', turmaRouter);
app.use('/atividadeAluno', atividadeAlunoRouter);
app.use('/atividade', atividadeRouter);
app.use('/correcaoQuestao', correcaoQuestaoRouter);
app.use('/correcao', correcaoRouter);
app.use('/criterio', criterioRouter);
app.use('/criterioQuestao', criterioQuestaoRouter);
app.use('/questao', questaoRouter);
app.use('/ano-letivo', anoLetivoRouter);
app.use('/aluno-turma', alunoTurmaRouter);


app.listen(PORT, async () => {
  console.log("API started");
});