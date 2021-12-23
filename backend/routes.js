const rotas = require('express').Router()
const { urlencoded } = require('express')
const conexao = require('./config/conexao')

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// rota para listar os dados do database
rotas.get('/',(req,res)=>{
    // selecionando os dados da tabela
    let sql = 'select * from tb_transferencias'
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json(rows) 
    })
})

// exibindo uma única transferência
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_transferencias where id_transferencia = ?'
    conexao.query(sql,[id],(erro,rows,fields)=>{
        if(erro) throw erro
        res.json(rows[0])
    })
})

// deletando uma tranferência
rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_transferencias where id_transferencia = ${id}`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:'Transferência Excluída, Valor Retornará ao Depositante'})
    })
})

// essa rota é para fazer uma inclusão na tabela de transferências
rotas.post('/', urlencodedParser,(req,res)=>{
    const {nomeCliente,valorTransferencia,contaCliente,digitoConta} =req.body
    let sql = `insert into tb_transferencias(nomeCliente,valorTransferencia, contaCliente, digitoConta) values('${nomeCliente}','${valorTransferencia}','${contaCliente}', '${digitoConta}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:'Transferência Realizada, em Instantes o Valor Estará Disponível'})
    })
})

rotas.put('/:id', urlencodedParser,(req,res)=>{
    const {id} = req.params
    const {nomeCliente,valorTransferencia,contaCliente,digitoConta} = req.body
    let sql = `update tb_transferencias set
                nomeCliente = '${nomeCliente}',
                valorTransferencia = '${valorTransferencia}',
                contaCliente = '${contaCliente}',
                digitoConta = '${digitoConta}'
                where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:'Transferência Atualizada, em Instantes o Valor Alterado Estará Disponível'})
    })
})

module.exports = rotas