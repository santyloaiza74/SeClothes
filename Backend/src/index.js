const express = require('express')
const { port: APP_PORT, port } = require('./config/config')
const routerApi = require('./routes/index')


const app = express()

app.use(express.json())

routerApi(app)

app.listen(port, () => {
    console.log(`Backend del proyecto funcionando por el puerto: ${port}`
    )
})