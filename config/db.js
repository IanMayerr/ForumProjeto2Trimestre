// // import dotenv from "dotenv"

// // Arquivo responsável pela configuração e conexão com o banco de dados
 
// // Importar o pacote do mysql
// const mysql = require('mysql2');

// // Importar o pacote de acesso aos de variáveis de ambiente
// // dotenv.config();
// // require("dotenv").config();
// const dotenv = require('dotenv').config();


// // Estabelece a criação da conexão com banco 
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// });

// // Testa se o banco esta conectado
// connection.connect(function(err) {
//     if (err) {
//         throw err;
//     } else {        
//         console.log("Mysql Connected!");
//     }
// });

// module.exports = connection;


// ------------------------------------------------------------------------

const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Mysql Connected!');
    }
});

connection.on('error', function(err) {
    console.error('Erro na conexão com o banco de dados:', err);
});

module.exports = connection;


