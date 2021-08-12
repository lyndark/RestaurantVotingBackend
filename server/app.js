const express = require("express"); //gerenciador de requisições http
const router = require('../routes') //importando nossas rotas
const {json} = require ('body-parser') //importanto objeto que permite interpretar o body da requisição
const app = express() //instanciando nossa aplicação

app.use(json()) //permite que nossa aplicação interprete json no body da requisição
app.use(router) //cria nossas rotas de endpoint

module.exports = app //exporta nossa aplicação