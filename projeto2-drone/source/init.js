const readline = require('readline')
const { createSocket } = require('dgram')
const CommandParser = require('./CommandParser')
const Commander = require('./commander')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 889
const TELLO_HOST = '192.168.20.1'

const getSocket = ()=>{
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async()=>{await cmder.sendTakeOff()},
        onLand: async()=>{await cmder.sendLand()},
        onForward: async(dist)=>{await cmder.sendForward(dist)},
        onBack: async(dist)=>{await cmder.sendBack(dist)},
        onRight: async(dist)=>{await cmder.sendRight(dist)},
        onLeft: async(dist)=>{await cmder.sendLeft(dist)},
        onCw: async(dist)=>{await cmder.sendCw(dist)},
        onCcw: async(dist)=>{await cmder.sendCcw(dist)},
        onFlipBack: async()=>{await cmder.sendFlipBack()},
        onFlipFront: async()=>{await cmder.sendFlipFront()},
        onBattery: async()=>{await cmder.sendBattery()}
    })
    console.log('Iniciating!')
    socket.on('message', (msg)=>{
        console.log(`Dji tello: ${msg.toString()}`)
    })
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err}`)
    })
    socket.on('listening', ()=>{
        console.log('Socket is listening')
    })
    console.log('Enter a command!')
    rl.on('line', (line)=>{
        if (!cmdp.parseCommand(line)) {
            if (line=='exit') {
                console.log('Bye')
                process.exit(0)
            }
        }
        console.log('Not a valid command')
    })
})