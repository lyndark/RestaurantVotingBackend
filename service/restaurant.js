const { executeQuery } = require('./execute') //importando a função que executa sqlQuery

/*
    função de inserir restaurante
    request: objeto que contém informações da requisição do front
    response: objeto para retornar infomações para o front
*/
function postRestaurant(request, response) {
    const { name } = request.body //extraindo informação do body da requisição
    const sqlQuery = 'INSERT INTO restaurants (name) VALUES(?)' //string literal que contém o sql a ser executado
    const paramsSql = [name] //parametros que serão interpolados na string literal de sql
    executeQuery(response, sqlQuery, paramsSql) //executando a query sql
}

//exportando as funções 
module.exports = {
    postRestaurant
}
