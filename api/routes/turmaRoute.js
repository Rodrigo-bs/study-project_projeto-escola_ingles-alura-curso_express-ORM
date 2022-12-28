const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router.get('/turmas', TurmaController.pegarTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegarUmaTurma);
router.get('/turmas/deletar/:id', TurmaController.deletarTurma); 

router.post('/turmas', TurmaController.criarTurma);
router.put('/turmas/:id', TurmaController.atualizarTurma);

module.exports = router;