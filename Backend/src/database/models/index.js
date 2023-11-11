const {Login,LoginSchema}= require('./login.model')
const { Comprador, CompradorSchema }=require('../models/comprador.model')
const { Carrito, CarritoSchema } = require('./carrito.model')
const { Venta, VentasSchema} = require('./venta.model')
const { Producto, ProductoSchema } = require('./producto.model')
const { Subasta, SubastaSchema } = require('./subasta.model')
const { Puja, PujasSchema } = require('./pujas.model')
const {Vendedor,VendedorSchema}=require('./vendedor.model')

function setupModels(sequelize) {
    Login.init(LoginSchema, Login.config(sequelize))
    Comprador.init(CompradorSchema,Comprador.config(sequelize))
    Carrito.init(CarritoSchema, Carrito.config(sequelize))
    Venta.init(VentasSchema,Venta.config(sequelize))
    Producto.init(ProductoSchema, Producto.config(sequelize))
    Subasta.init(SubastaSchema, Subasta.config(sequelize))
    Puja.init(PujasSchema, Puja.config(sequelize))
    Vendedor.init(VendedorSchema, Vendedor.config(sequelize))

    Login.associate(sequelize.models) 
    Comprador.associate(sequelize.models)
    Carrito.associate(sequelize.models)
    Venta.associate(sequelize.models)
    Producto.associate(sequelize.models)
    Subasta.associate(sequelize.models)
    Puja.associate(sequelize.models)
    Vendedor.associate(sequelize.models)
}

module.exports = setupModels