const VendedorService= require('../service/vendedor.service')

class VendedorController{
    constructor(){
        this.service= new VendedorService()
    }
    async index(){
        const vendedors= await this.service.getAll()
        return vendedors
    }
    async findOne(id){
        const vendedor= await this.service.getOne(id)
        if(!vendedor){
            throw new Error('Vendedor no encontrado')
        }
        return vendedor
    }
    async create(name,lastname,email,address,phone){
        const vendedor = await this.service.create(name,lastname,email,address,phone)
        return vendedor
    }
    async update(id, values){
        const vendedor = await this.service.update(id,values)
        if(!vendedor){
            throw new Error('Vendedor no encontrado')
        }
        return vendedor
    }
    async delete(id){
        const vendedor = this.service.delete(id)
        if(!vendedor)
        {
            throw new Error('No se encontro el Vendedor')
        }
        return vendedor
    }

}
module.exports= VendedorController