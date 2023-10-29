const {Login,LoginSchema}= require('./login.model')
const { Comprador, CompradorSchema }=require('../models/comprador.model')
const { Carrito, CarritoSchema } = require('./carrito.model')
const { Venta, VentasSchema} = require('./venta.model')
const { Producto, ProductoSchema } = require('./producto.model')
const { Subasta, SubastaSchema } = require('./subasta.model')
const { Puja, PujasSchema } = require('./pujas.model')

function setupModels(sequelize) {
    Login.init(LoginSchema, Login.config(sequelize))
    Login.associate(sequelize.models)
    Comprador.init(CompradorSchema,Comprador.config(sequelize))
    Comprador.associate(sequelize.models)
    Carrito.init(CarritoSchema, Carrito.config(sequelize))
    Carrito.associate(sequelize.models)
    Venta.init(VentasSchema,Venta.config(sequelize))
    Venta.associate(sequelize.models)
    Producto.init(ProductoSchema, Producto.config(sequelize))
    Producto.associate(sequelize.models)
    Subasta.init(SubastaSchema, Subasta.config(sequelize))
    Subasta.associate(sequelize.models)
    Puja.init(PujasSchema, Puja.config(sequelize))
    Puja.associate(sequelize.models)
}

module.exports = setupModels