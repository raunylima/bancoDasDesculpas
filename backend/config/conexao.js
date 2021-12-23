// ariável para instanciar o pacote do msql
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'Gui.Rau.7102',
    port: 3306,
    database: 'db_banco_das_desculpas'
})

conexao.connect((erro)=>{
    if(erro) throw erro
    console.log('Estamos Conectados ao MySQL') 
})

module.exports = conexao