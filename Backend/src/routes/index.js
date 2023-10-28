const {Router} = require('express')
const loginRouter= require('./login.routes')
function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/logins', loginRouter)
}

module.exports = routerApi