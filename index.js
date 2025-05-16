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
const itemCriterio = require('./src/routes/ItemCriterioRouter.js');
const ModelAssociation = require('./src/utils/ModelAssociation.js');
const correcaoCriterioRouter = require('./src/routes/CorrecaoCriterioRouter.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/aluno', alunoRouter);
app.use('/turma', turmaRouter);
app.use('/atividade-aluno', atividadeAlunoRouter);
app.use('/atividade', atividadeRouter);
app.use('/correcao-questao/', correcaoQuestaoRouter);
app.use('/correcao', correcaoRouter);
app.use('/criterio', criterioRouter);
app.use('/correcao-criterio', correcaoCriterioRouter);
app.use('/criterio-questao', criterioQuestaoRouter);
app.use('/questao', questaoRouter);
app.use('/ano-letivo', anoLetivoRouter);
app.use('/aluno-turma', alunoTurmaRouter);
app.use('/item-criterio', itemCriterio);

ModelAssociation.Init();

app.listen(PORT, async () => {
  console.log("API started");
});