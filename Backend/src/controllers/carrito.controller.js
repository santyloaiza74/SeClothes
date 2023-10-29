const CarritoService= require('../service/carrito.service')

class CarritoController{
    constructor(){
        this.service= new CarritoService()
    }
    async index(){
        const carritos= await this.service.getAll()
        return carritos
    }
    async findOne(id){
        const carrito= await this.service.getOne(id)
        if(!carrito){
            throw new Error('Carrito no encontrado')
        }
        return carrito
    }
    async create(comprador_id,producto_id){
        const carrito = await this.service.create(comprador_id,producto_id)
        return carrito
    }
    async update(id, values){
        const carrito = this.service.update(id,values)
        if(!carrito){
            throw new Error('Carrito no encontrado')
        }
        return carrito
    }
    async delete(id){
        const carrito = this.service.delete(id)
        if(!carrito)
        {
            throw new Error('No se encontro el carrito')
        }
        return carrito
    }

}
module.exports= CarritoController