// import dotenv from "dotenv"

// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
const cors = require('cors');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
// const dotenv = require('dotenv').config();
// dotenv.config()
const userRouter = require('../src/routes/userRoutes');
const loginRouter = require('./routes/loginRouter');
const commentRouter = require('./routes/commentRouter')

const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();
app.use(cors());
app.use(express.json());

// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
// app.set('port', process.env.PORT || 3005);
app.set('port', process.env.PORT || 3005);
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', commentRouter)

module.exports = app;
