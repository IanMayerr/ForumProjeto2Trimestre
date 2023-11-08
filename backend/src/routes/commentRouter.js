const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    createComment,
    getComments,
} = require('../controllers/commentController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/comment/create', createComment);
router.get('/posts', getComments);

module.exports = router;