const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    createComment,
} = require('../controllers/commentController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/createComment', createComment)

module.exports = router;