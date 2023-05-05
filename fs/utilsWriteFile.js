const {promisify} = require('util')
const writeFile = promisify(require('fs').writeFile)
const conteudo = `Criando arquivo usando promisify do módulo nativo util`

writeFile('utilArquivo.txt', conteudo)
.then(()=>{
    console.log('Arquivo criado com sucesso!')
}).catch((err)=>{
    console.log(`Deu erro: ${err}`)
})