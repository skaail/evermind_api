const express = require('express')
const routes = require('./routes')
const db = require('./src/db')

const app = express()

app.use(express.json())
app.use(routes)

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))