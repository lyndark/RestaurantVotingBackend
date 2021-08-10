var mysql = require('mysql'); // require = importando pacotes

var database = mysql.createPool({ // createpool = provedor de conexão
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'voting_result'
});


module.exports = {
    database 
} 