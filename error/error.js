//throw new Error('Ah não, deu ruim!')
//console.log('Depois do erro')

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ah não, deu ruim!')
}

function init(){
    try {
        execute()
    } catch (error) {
        console.log(`Temos um problema: ${error}`)
    }
}

init()
console.log('Depois do erro')