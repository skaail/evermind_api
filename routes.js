const express = require('express')
const routes = express.Router()
const candidatos = require('./src/controllers/candidatoController')

routes.get('/', (req, res) => {
    return res.json({name: "Teste"})
})

routes.get('/candidatos', candidatos.findAll)
routes.post('/candidatos', candidatos.createCandidato)
routes.post('/login', candidatos.login)


module.exports = routes