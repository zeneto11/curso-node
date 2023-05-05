const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a melhor marca de Drones no Mundo?', (answer)=>{
    console.log(`A melhor é ${answer}`)
        switch (answer) {
            case 'command':
                console.log('Ligando o drone')
                break;
            case 'takeoff':
                console.log('Decolando o drone')
                break;
        
            default:
                console.log('Ligue o drone!')
        }
    rl.close()
})