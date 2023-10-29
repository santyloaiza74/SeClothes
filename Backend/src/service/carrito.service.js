const {models}=require('../libs/sequelize')

class CarritoService{
    constructor(){
        this.model=models.Carrito
    }
    async getAll(){
        const carritos= await this.model.findAll()
        return carritos
    }
    async getOne(id){
        const carrito=await this.model.findByPk(id)
        return carrito
    }
    async create(comprador_id,producto_id){
        const carrito= await this.model.create({comprador_id,producto_id})
        return carrito
    }
    async update(id,values){
        const carrito=await this.model.findByPk(id)
        if(!carrito)return null
        const updateCarrito= await user.update(values)
        return updateCarrito
    }
    async delete(id){
        const carrito =await this.getOne(id)
        if(!carrito)return null
        await carrito.destroy()
        return carrito.id
    }
}
module.exports= CarritoService