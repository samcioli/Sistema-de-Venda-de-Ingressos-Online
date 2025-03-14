const express = require("express");
const router = express.Router();
const eventoController = require("../controllers/eventoController");

router.post('/eventos', eventoController.criarEvento);
router.get('/eventos', eventoController.listarEventos);
router.get('/eventos/:id', eventoController.listarEventoId);
router.put('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.deletarEvento);

module.exports = router;