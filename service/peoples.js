const { executeQuery } = require ('./execute')

function postPeoples (request, response){
    const {first_name, last_name} = request.body 
    const sqlQuery = 'INSERT INTO peoples (first_name, last_name) VALUES (? , ?)'
    const paramsSql = [first_name, last_name]
    executeQuery(response, sqlQuery, paramsSql)
}
module.exports = {
    postPeoples
}
