const express = require('express');
const router = express.Router();
const TurmaController = require("../controllers/TurmaController.js");

router.get('/', TurmaController.Listar);
router.get('/:id', TurmaController.ObterItem);
router.post('/', TurmaController.Criar);
router.put('/:id', TurmaController.Atualizar);
router.delete('/:id', TurmaController.Deletar);

module.exports = router;