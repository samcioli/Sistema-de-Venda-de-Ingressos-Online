const express = require("express");
const router = express.Router();
const ingressoController = require("../controllers/ingressoController");

router.post('/ingressos', ingressoController.criarIngresso);
router.get('/ingressos', ingressoController.listarIngressos);
router.get('/ingressos/:id', ingressoController.listarIngressoId);
router.put('/ingressos/:id', ingressoController.atualizarIngresso);
router.delete('/ingressos/:id', ingressoController.deletarIngresso);

module.exports = router;