const express = require("express");
const router = express.Router();
const vendaController = require("../controllers/vendaController");

router.post('/vendas', vendaController.criarVenda);
router.get('/vendas', vendaController.listarVendas);
router.get('/vendas/:id', vendaController.listarVendaId);
router.put('/vendas/:id', vendaController.atualizarVenda);
router.delete('/vendas/:id', vendaController.deletarVenda);

router.get('/vendas/relatorio', vendaController.gerarRelatorioVendas);

module.exports = router;