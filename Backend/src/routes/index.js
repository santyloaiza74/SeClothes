const {Router} = require('express')
const loginRouter= require('./login.routes')
const compradorRouter=require('./comprador.routes')
const vendedorRouter=require('./vendedor.routes')
const carritoRouter=require('./carrito.routes')
const ventaRouter=require('./venta.routes')
const productoRouter=require('./producto.routes')
function routerApi(app){
    const router = Router()

    app.use('/api/v1', router)
    router.use('/logins', loginRouter)
    router.use('/compradors',compradorRouter)
    router.use('/vendedors',vendedorRouter)
    router.use('/carritos',carritoRouter)
    router.use('/ventas',ventaRouter)
    router.use('/productos',productoRouter)
}

module.exports = routerApi