const {models}=require('../libs/sequelize')

class ProductoService{
    constructor(){
        this.model=models.Producto
    }
    async getAll(){
        const productos= await this.model.findAll()
        return productos
    }
    async getOne(id){
        const productos=await this.model.findByPk(id)
        return productos
    }
    async create(name,description,state,price,image,categoria,subasta_id){
        const producto= await this.model.create({name,description,state,price,image,categoria,subasta_id})
        return producto
    }
    async update(id,values){
        const producto=await this.model.findByPk(id)
        if(!producto)return null
        const updateProducto= await user.update(values)
        return updateProducto
    }
    async delete(id){
        const producto =await this.getOne(id)
        if(!producto)return null
        await producto.destroy()
        return producto.id
    }
}
module.exports= ProductoService