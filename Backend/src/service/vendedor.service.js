const {models}=require('../libs/sequelize')

class VendedorService{
    constructor(){
        this.model=models.Vendedor
    }
    async getAll(){
        const vendedors= await this.model.findAll()
        return vendedors
    }
    async getOne(id){
        const vendedor=await this.model.findByPk(id)
        return vendedor
    }
    async create(name,lastname,email,addres,phone){
        const vendedor= await this.model.create({name,lastname,email,addres,phone})
        return vendedor
    }
    async update(id,values){
        const vendedor=await this.model.findByPk(id)
        if(!vendedor)return null
        const updateVendedor= await user.update(values)
        return updateVendedor
    }
    async delete(id){
        const vendedor =await this.getOne(id)
        if(!vendedor)return null
        await vendedor.destroy()
        return vendedor.id
    }
}
module.exports= VendedorService