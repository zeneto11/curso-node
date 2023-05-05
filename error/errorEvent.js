const {EventEmitter} = require('events')
const emitter = new EventEmitter()

const validaObj = (a)=>{
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Tipo informado inválido'))
    } else {
        console.log('Objeto válido!')
    }
}

emitter.on('error', (err)=>{
    console.log('Evento ' + err.message)
})

let dados = { name:'zeneto', course: 'NodeJS'}

validaObj(dados)