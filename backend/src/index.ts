import express from "express";

const app = express()

app.get('/', (req, res) => {
    console.log(req.body)
    return res.send({msg: 'Olá Mundo'})
})

app.listen(3333, () => console.log('Aplicação Iniciada!'))
