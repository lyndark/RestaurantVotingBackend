const http = require ('http')
const app = require ('../server/app')
const server = http.createServer(app)
console.log('\n >>> back end rodando na porta 3000 <<< \n')
server.listen(3000);