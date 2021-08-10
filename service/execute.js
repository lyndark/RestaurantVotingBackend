const { database } = require('./conection')

/*
Response: objeto responsavel pelo retorno ao usario.
SqlServer: string literal que contém o código sql.
Params: são parametros para o sql. 
*/

function executeQuery(response, sqlQuery, params = []) {

    //se der falha na query retorna o erro se não o resultado da query
    function callbackQuery(error, result) {

        if (error) {
            //se o erro existir retorna o erro da sql
            return response.status(400).send(error)
        }

        //senão manda o resultado da query
        return response.status(200).send(result)
    }

    //se der falha na conexão retorna 'error', se conectada com sucesso retorna 'connection'.
    function callbackConnection(error, connection) { 

        if (error)
            //se o erro existir retorna o erro de conexão
            return response.status(500).send(error)

        //se a conexão for bem sucedida executa a query 
        connection.query(sqlQuery, params, callbackQuery)
    }

    /*  getconnection tenta obter conexão da createPool,
     callback vai ser chamada se der falha ou sucesso na conexão */
    database.getConnection(callbackConnection)
}
module.exports = {executeQuery}