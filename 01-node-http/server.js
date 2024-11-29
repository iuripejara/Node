const http = require('node:http')
const server = http.createServer((request, response)=>{
    const path = request.url

    switch (path) {
        case "/":
            response.writeHead(200)
            response.write("voce esta na pagina inicial!")
            break;
        case "/artigos":
            response.writeHead(200)
            response.write("vc esta na pagina artigos")
            break;
        default:
            response.writeHead(404)
            response.write("caminho nao encontrado")
            break;
    }
    response.end()
})
const Port =300

server.listen(Port, ()=>{
    console.log(`Servidor rodando http://localhost:${Port}/`)
})