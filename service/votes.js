const { executeQuery } = require('./execute')

function postVotes(request, response) {
    
    var date = new Date();
    var datemin = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0)
    var datemax = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15, 50)

    if (date.getTime() >= datemax.getTime() || date.getTime() <= datemin.getTime()) {
        return response.status(400).send('Ultrapassou o horário da votação.')
    }

    const { id_peoples, id_restaurants } = request.body
    const sqlQuery = 'INSERT INTO votes (id_peoples, id_restaurants) VALUES (?, ?)'
    const paramsSql = [id_peoples, id_restaurants]

    executeQuery(response, sqlQuery, paramsSql)
}

function getVotesResult(request, response) {
    const sqlQuery = `
        SELECT r.name, count(*) as votes 
        FROM votes AS v join restaurants as r on v.id_restaurants = r.id 
        where v.voting_date = (current_date()) 
        group by r.id order by votes desc;
    `
    executeQuery(response, sqlQuery)
}

function getRestaurantWinner(request, response) {
    const sqlQuery = `
        SELECT r.name, count(*) as votes 
        FROM votes AS v join restaurants as r on v.id_restaurants = r.id 
        where v.voting_date = (current_date()) 
        group by r.id order by votes desc LIMIT 1;
    `
    executeQuery(response, sqlQuery)
}

module.exports = {
    postVotes, getVotesResult, getRestaurantWinner
}