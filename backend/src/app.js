// import dotenv from "dotenv"

// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
// const dotenv = require('dotenv').config();
// dotenv.config()
const userRouter = require('../src/routes/userRoutes');

const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();
// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
// app.set('port', process.env.PORT || 3005);
app.set('port', process.env.PORT || 3333);
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);

module.exports = app;
