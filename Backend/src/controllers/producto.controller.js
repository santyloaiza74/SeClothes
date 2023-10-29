const ProductoService= require('../service/producto.service')

class ProductoController{
    constructor(){
        this.service= new ProductoService()
    }
    async index(){
        const productos= await this.service.getAll()
        return productos
    }
    async findOne(id){
        const producto= await this.service.getOne(id)
        if(!producto){
            throw new Error('Producto no encontrado')
        }
        return producto
    }
    async create(name,description,state,price,image,categoria,subasta_id){
        const producto = await this.service.create(name,description,state,price,image,categoria,subasta_id)
        return producto
    }
    async update(id, values){
        const producto = this.service.update(id,values)
        if(!producto){
            throw new Error('Producto no encontrado')
        }
        return producto
    }
    async delete(id){
        const producto= this.service.delete(id)
        if(!producto)
        {
            throw new Error('No se encontro el Producto')
        }
        return producto
    }

}
module.exports= ProductoController