const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
    response.json({
        nome: 'Caroline Suisso',
        imagem: 'https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.6435-9/67504717_1031107023754539_8328464748320391168_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEtKxaXZLwDQkWTYu1-b8qQdyv-3QguOMh3K_7dCC44yNvohfQXHCt8d5ZU8nZ3Hjl0OMADsgHJKB9bDIRd-inx&_nc_ohc=L6cXcY7gZ68Q7kNvgFkDXa6&_nc_zt=23&_nc_ht=scontent.fsdu11-1.fna&_nc_gid=ARusFplhpHmJ757qrzUuVAp&oh=00_AYA9f0OiUxOkCHVqmh6XQG-Z0xXT9IwL8OZhvKzvRep0Zw&oe=674D9B45',
        minibio: 'estudante e amante dos animais'
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)