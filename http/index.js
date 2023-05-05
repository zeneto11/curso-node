const http = require("http") // módulo nativo do node
const hostname = "127.0.0.1"
const port = 3000
const url = `http://${hostname}:${port}`

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Bem Vindo<br/>Node.JS</h1>')
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at ${url}`)
})

const open = (process.platform == 'darwin'? 'open':
process.platform == 'win32'? 'start':'xdg-open');

require('child_process').exec(open + ' ' + url);