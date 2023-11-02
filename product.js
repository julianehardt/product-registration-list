const express =  require("express") // iniciando express
const router = express.Router()//primeira parte da rota
const cors = require('cors')// instalacao pacote cors que permite consumir esta api no frontend

const concectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo banco de dados
concectaBancoDeDados()  //chamar a funcao do conecta o banco de dados

const Product = require('./productModel') //importar o modelo para o servidor

const app = express()//iniciando app
app.use(express.json())// tratando as requisiçoes, dados que trafegarem estarao no formato json
app.use(cors())
const porta = 3333// criando a porta

//GET
async function showProducts(request, response) 
//funcao atrelada a verbo do protocolo HTTP precisa request response
 {
    try {
        const productsDataBase = await Product.find()
        response.json(productsDataBase)
    } catch(erro){
        console.log(erro)
    }
    
}

//POST
async function createProduct(request,response) {
    const newProduct = new Product({
        product: request.body.product,
        description: request.body.description,
        price: request.body.price,
        avaliable: request.body.avaliable
    })

    try {
        const productCreated = await newProduct.save() //a partir da requisicao da mulher criada tenta salva-la no banco de dados
        response.status(201).json(productCreated)
    } catch (erro){
        console.log(erro)
    }
}



app.use(router.get('/products', showProducts))// segunda parte da rota GET /mulheres
app.use(router.post('/products', createProduct))//rota POST /mulheres


//PORTA
function mostraPorta () {
    console.log ("Sevidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta