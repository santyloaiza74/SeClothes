const {models}=require('../libs/sequelize')

class VentaService{
    constructor(){
        this.model= models.Venta
    }
    async getAll(){
        const ventas= await this.model.findAll()
        return ventas
    }
    async getOne(id){
        const venta=await this.model.findByPk(id)
        return venta
    }
    async create(date,price,producto_id,vendedor_id,comprador_id){
        const venta= await this.model.create({date,price,producto_id,vendedor_id,comprador_id})
        return venta
    }
    async update(id,values){
        const venta=await this.model.findByPk(id)
        if(!venta)return null
        const updateVenta= await user.update(values)
        return updateVenta
    }
    async delete(id){
        const venta =await this.getOne(id)
        if(!venta)return null
        await venta.destroy()
        return venta.id
    }
}
module.exports= VentaService