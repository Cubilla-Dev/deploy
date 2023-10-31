const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({message: 'Funcionando'})
})

app.listen(3000, console.log('Server en linea'))
