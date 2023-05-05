console.log('Exibindo uma mensgame no console!')

//erro

console.log(new Error('Exibindo a mensagem de erro, temos problemas!'))

const carros = ['Audi', 'GM', 'Ford', 'Honda']
console.table(carros)

const dados = {name:'zeneto', empresa:'UEA'}
console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')
console.log('Resetando processo')
console.countReset('processo')
console.count('processo')
console.count('processo')

console.time('contador')
for (let index = 0; index < 10; index++) {
    //console.log('-'); 
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih rapaz %s', 'não funcionou')

//console.clear()