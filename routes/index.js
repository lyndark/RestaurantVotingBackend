const service = require('../service/restaurant')
const express = require ('express')
const router = express.Router()
/*
GET: obter dados do servidor
POST: salvar dados no servidor
*/ 

router.post('/restaurants', service.postRestaurant)
module.exports = router 
