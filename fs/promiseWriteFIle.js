const {writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve,reject)=>{
        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

criaArquivo('ArquivoPromise.txt', 'Criando arquivo com promises')
    .then(()=>console.log('Arquivo criado com sucesso!'))
    .catch(()=>console.log(err))