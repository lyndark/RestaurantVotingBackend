const serviceRestaurants = require('../service/restaurant') //importa nossos métodos service
const servicePeoples = require ('../service/peoples')
const serviceVotes = require ('../service/votes')
const express = require ('express') // gerenciador de aquisição http
const router = express.Router() //cria uma instancia do objeto para roteamento dos endpoints

/*
GET: obter dados do servidor
POST: salvar dados no servidor
*/ 
router.post('/restaurants', serviceRestaurants.postRestaurant)
router.post('/people', servicePeoples.postPeoples)
router.post('/votes', serviceVotes.postVotes)

router.get('/restaurants', serviceRestaurants.getRestaurants)
router.get('/votesResult', serviceVotes.getVotesResult)
router.get('/restaurantWinner', serviceVotes.getRestaurantWinner)

module.exports = router //exportando nossas rotas
