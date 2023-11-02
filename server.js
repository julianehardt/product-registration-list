const express =  require("express")


const app = express()
const porta = 3333

function mostraPorta () {
    console.log ("Sevidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) 