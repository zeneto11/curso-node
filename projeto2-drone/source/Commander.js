class Commander {
    constructor(socket, host, port){
        this.socket = socket
        this.host = host
        this.port = port
    }

    sendInitCommand(){
        return new Promise((resolve, reject) => {
            this.socket.send('command', 0, 'command'.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendTakeOff(){
        return new Promise((resolve, reject) => {
            this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendLand(){
        return new Promise((resolve, reject) => {
            this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendForward(distance=20){
        return new Promise((resolve, reject) => {
            this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendBack(distance=20){
        return new Promise((resolve, reject) => {
            this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendRight(distance=20){
        return new Promise((resolve, reject) => {
            this.socket.send(`right ${distance}`, 0, `right ${distance}`.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendLeft(distance=20){
        return new Promise((resolve, reject) => {
            this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    sendFlip(){
        return new Promise((resolve, reject) => {
            this.socket.send(`flip b`, 0, `flip b`.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

    getBattery(){
        return new Promise((resolve, reject) => {
            this.socket.send('battery?', 0, 'battery?'.length, this.port, this.host, (err)=>{
                if (err) {
                    return reject(err)
                } else {
                    return resolve()
                }
            })
        })
    }

}

module.exports = Commander