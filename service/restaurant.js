const {executeQuery} = require('./execute')

function postRestaurant(request, response){
    const {name} = request.body
    const sqlQuery = 'INSERT INTO restaurants (name) VALUES(?)'
    const paramsSql = [name]
    executeQuery (response, sqlQuery, paramsSql)
}
module.exports = {postRestaurant}
