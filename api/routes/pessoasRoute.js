const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.get('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.pegaUmaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:estudante_id/matricula/', PessoaController.criaMatricula)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.atualizaMatricula)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.apagaMatricula)

module.exports = router