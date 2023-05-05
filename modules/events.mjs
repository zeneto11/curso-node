import {EventEmitter} from 'events'

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//subscriber ou assinante
meuEvento.on('segurança', (x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//publisher ou emissor
meuEvento.emit('segurança', 'userAdmin', 'alterou salário')

meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante: '+ dados)
})
meuEvento.emit('encerrar', 'Encerrando a execução da importação de dados!')