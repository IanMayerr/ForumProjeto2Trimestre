const connection = require('../config/db');


async function createComment(comment) {

    const query = 'INSERT INTO Comments(comment) VALUES (?);';

    const params = [comment];

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


module.exports = {
    createComment,
}