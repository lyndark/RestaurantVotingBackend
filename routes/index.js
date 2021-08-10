const service = require('../service/restaurant') //importa nossos métodos service
const express = require ('express') //?
const router = express.Router() //cria uma instancia do objeto para roteamento dos endpoints

/*
GET: obter dados do servidor
POST: salvar dados no servidor
*/ 
router.post('/restaurants', service.postRestaurant)

module.exports = router //exportando nossas rotas
