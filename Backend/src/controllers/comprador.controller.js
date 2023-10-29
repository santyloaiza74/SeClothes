const CompradorService= require('../service/comprador.service')

class CompradorController{
    constructor(){
        this.service= new CompradorService()
    }
    async index(){
        const compradors= await this.service.getAll()
        return compradors
    }
    async findOne(id){
        const comprador= await this.service.getOne(id)
        if(!comprador){
            throw new Error('Comprador no encontrado')
        }
        return comprador
    }
    async create(name,lastname,email,addres,phone){
        const comprador = await this.service.create(name,lastname,email,addres,phone)
        return comprador
    }
    async update(id, values){
        const comprador = this.service.update(id,values)
        if(!comprador){
            throw new Error('Comprador no encontrado')
        }
        return comprador
    }
    async delete(id){
        const comprador = this.service.delete(id)
        if(!comprador)
        {
            throw new Error('No se encontro el Comprador')
        }
        return comprador
    }

}
module.exports= CompradorController