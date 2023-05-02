const http = require("http") // módulo nativo do node
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCOde = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Ola mundo \n Meu Primeiro Script')
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})