const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next)=>{
    console.log('Executando middleware em nível de aplicação')
    
    return next()
})

app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Zeneto', {maxAge: 900000, httpOnly: true})
    return res.send('Cookie foi gravado com sucesso!')
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user']
    if (user) {
        return res.send(user)
    }
})

app.get('/',(req, res)=>{
    res.send('Vamos flamengo!')
})

app.use('/admin', adminRoutes)
app.use('/usuario', usuarioRoutes)

app.get('*', (req, res, next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema'))
    })
})

app.use((err, req, res, next, )=>{
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(3000, ()=>{
    console.log('Server running: http://localhost:3000')
})