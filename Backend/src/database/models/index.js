const {Login,LoginSchema}= require('./login.model')
const { Comprador, CompradorSchema }=require('../models/comprador.model')
const { Carrito, CarritoSchema } = require('./carrito.model')
const { Ventas, VentasSchema} = require('./venta.model')
const { Producto, PRODUCTO_TABLE, ProductoSchema } = require('./producto.model')
const { Subasta, SubastaSchema } = require('./subasta.model')
const { Pujas, PujasSchema } = require('./pujas.model')

function setupModels(sequelize) {
    Login.init(LoginSchema, Login.config(sequelize))
    Login.associate(sequelize.models)
    Comprador.init(CompradorSchema,Comprador.config(sequelize))
    Comprador.associate(sequelize.models)
    Carrito.init(CarritoSchema, Carrito.config(sequelize))
    Carrito.associate(sequelize.models)
    Ventas.init(VentasSchema,Ventas.config(sequelize))
    Ventas.associate(sequelize.models)
    Producto.init(ProductoSchema, Producto.config(sequelize))
    Producto.associate(sequelize.models)
    Subasta.init(SubastaSchema, Subasta.config(sequelize))
    Subasta.associate(sequelize.models)
    Pujas.init(PujasSchema, Pujas.config(sequelize))
    Pujas.associate(sequelize.models)
}

module.exports = setupModels