const VentaService= require('../service/venta.service')

class VentaController{
    constructor(){
        this.service= new VentaService()
    }
    async index(){
        const ventas= await this.service.getAll()
        return ventas
    }
    async findOne(id){
        const venta= await this.service.getOne(id)
        if(!venta){
            throw new Error('Vendedor no encontrado')
        }
        return venta
    }
    async create(date,price,producto_id,vendedor_id,comprador_id){
        const venta = await this.service.create(date,price,producto_id,vendedor_id,comprador_id)
        return venta
    }
    async update(id, values){
        const venta = this.service.update(id,values)
        if(!venta){
            throw new Error('Vendedor no encontrado')
        }
        return venta
    }
    async delete(id){
        const venta = this.service.delete(id)
        if(!venta)
        {
            throw new Error('No se encontro el Vendedor')
        }
        return venta
    }

}
module.exports= VentaController