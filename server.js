const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({message: 'Funcionando'})
})

app.get('/prueba', (req, res) => {
    res.json({message: 'Practica de un rollback'})
  })

app.listen(3000, console.log('Server en linea'))
