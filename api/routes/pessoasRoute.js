const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.pegarTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegarUmaPessoa);
router.get('/pessoas/deletar/:id', PessoaController.deletarPessoa); 

router.get('/pessoas/:idPessoa/matriculas/', PessoaController.pegarTodasAsMatriculasDeUmaPessoa);
router.get('/pessoas/:idPessoa/matriculas/:idMatricula',  PessoaController.pegarUmaMatricula);

router.post('/pessoas/:idPessoa/matriculas', PessoaController.criarMatricula);

router.post('/pessoas', PessoaController.criarPessoa);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);


module.exports = router;