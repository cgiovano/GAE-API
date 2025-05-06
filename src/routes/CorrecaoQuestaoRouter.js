const express = require('express');
const router = express.Router();
const correcaoQuestaoController = require('../controllers/CorrecaoQuestaoController');

router.get('/', correcaoQuestaoController.Listar);
router.get('/correcao/:id', correcaoQuestaoController.ListarQuestoesPorCorrecao);
router.post('/', correcaoQuestaoController.Criar);
router.put('/:id', correcaoQuestaoController.Atualizar);
router.delete('/:id', correcaoQuestaoController.Deletar);

module.exports = router;