const express = require('express');
const router = express.Router();
const correcaoItemCriterioController = require('../controllers/CorrecaoCriterioController');

router.get('/correcao/:id', correcaoItemCriterioController.ListarItensPorCorrecao);
router.get('/correcao-questao/:id', correcaoItemCriterioController.ObterItem);
router.put('/:id', correcaoItemCriterioController.Atualizar);
router.delete('/:id', correcaoItemCriterioController.Deletar);
router.post('/', correcaoItemCriterioController.Criar);
router.put('/', correcaoItemCriterioController.AtualizarEmLista);

module.exports = router;