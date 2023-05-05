const {writeFile} = require('fs')

writeFile('arquivo.txt', 'Criando arquivo de texto', err =>{
    if(err) throw err
    console.log('Arquivo criado com sucesso!')
})