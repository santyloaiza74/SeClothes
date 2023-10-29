const {Router} = require('express')
const loginRouter= require('./login.routes')
const compradorRouter=require('./comprador.routes')
const vendedorRouter=require('./vendedor.routes')
const carritoRouter=require('./carrito.routes')
function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/logins', loginRouter)
    router.use('/compradors',compradorRouter)
    router.use('/vendedors',vendedorRouter)
    router.use('/carritos',carritoRouter)
}

module.exports = routerApi