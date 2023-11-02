//arquivo para criar configurações do banco de dados
//1 trazer monggose para dentro do projeto
const mongoose = require('mongoose')
require('dotenv').config()

//javascrip é uma linguagem que resolve 1 problema por vez
// quando temos instrucoes que possuem dependencia das anteriores,
//precisamos pedir que a execucao de tal funcao seja atendida primeiro, por isso o async
async function concectaBancoDeDados() {


    //para mitigar chances de erro usar as funcoes try e catch, para tentar e caso n consiga, pegue e mostre o erro no console
    try {
        //mostrar msg no terminal
        console.log('Conexão com o banco de dados iniciou')

    //preciso que espere que o mongoose conecte o mongo DB com o projeto
    //enquanto isso, tudo roda normalmente
    await mongoose.connect(process.env.MONGO_URL)

    console.log('Conexão com banco de dados feita com sucesso!')
    }
    catch(erro) {
        console.log(erro)
    }
}

//para poder exportar para o arquivo Products
module.exports = concectaBancoDeDados