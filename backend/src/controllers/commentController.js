const connection = require('../config/db');


async function createComment(request, response) {

    const query = 'INSERT INTO comentarios(id_usuario, descricao) VALUES (?, ?);';

    const params = Array(
        request.body.idUsuario,
        request.body.novoComentario
    );

    connection.query(query, params, (err, results) => {
        if (err) {
            response.status(400).json({
                success: false,
                message: 'Erro no Envio do Comentário!',
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        } else {
            response.status(201).json({
                success: true,
                message: 'Comentário Enviado!',
                data: results
            });
        }
    });
}

async function getComments(request, response) {
    const query = 'SELECT * FROM comentarios';

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json(`{
                    success: true,
                    message: 'Sucesso'
                    data: results
                }`)
        } else {
            console.log(err);
        }
    })
}


module.exports = {
    createComment,
    getComments
}