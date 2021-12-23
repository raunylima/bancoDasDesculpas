require('./config/conexao')
const express = require('express')
const app = express()
const porta = 8080
// outro metódo para configurar o cors através do backend
// const cors = require('cors')
// app.use(cors())
// instalar o npm install cors e colocar o endereço completo do host > http://localhost:3000/nome"

// utilizar arquivo no formato json
app.use(express.json())

// criando variável para armazenar todas as rotas definidas no arquivo routes.js
const rotasTransferencias = require('./routes')

// para todas as rotas definidas no arquivo routes.js
app.use('/transferencias', rotasTransferencias)

app.listen(porta,()=>{
     console.log('Servidor Rodando')
})