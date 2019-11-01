require('dotenv').config()
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const massive = require('massive')


const app = express()
app.use(express.json())

app.get('/api/inventory/:id', ctrl.getOne)
app.get('/api/inventory', ctrl.getAll)
app.delete('/api/inventory/:id', ctrl.deleteProd)
app.put('/api/inventory/:id', ctrl.editProduct)
app.post('/api/inventory', ctrl.addProduct)

massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log('Database Connected')
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))
})
