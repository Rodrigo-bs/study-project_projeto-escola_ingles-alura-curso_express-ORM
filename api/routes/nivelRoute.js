const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router.get('/niveis', NivelController.pegarTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegarUmNivel);
router.get('/niveis/deletar/:id', NivelController.deletarNivel); 

router.post('/niveis', NivelController.criarNivel);
router.put('/niveis/:id', NivelController.atualizarNivel);

module.exports = router;