const express = require('express')
const app = express()

app.get('/', (res, req) => {
    res.json({message: 'Funcionando'})
})

app.listen(3000, console.log('Server en linea'))


