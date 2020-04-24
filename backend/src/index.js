/**
 * Rotas / Recursos 
*/

/* 
*Metodos HTTP
*
*GET: buscar/listar informação
*POST: criar informação
*PUT: alterar informação
*DELETE: apagar informação
*/

/*
*Tipos de parâmetros
*
*Query Params: parâmetros nomeados enviandos na rota  após "?" (filters, paginations,etc)
*Route Params: parâmetros utilizados para identificar recursos
*Request body: corpo da requisição, utilizado para criar ou alterar recursos
*
*/

const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

