const http = require ('http') //importando pacote http que cria uma conexão http
const app = require ('../server/app') //importando nosso objeto app
const server = http.createServer(app) //

console.log('\n >>> back end rodando na porta 3000 <<< \n')

server.listen(3000); //expondo nossa aplicação na porta 3000