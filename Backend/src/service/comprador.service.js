const {models}=require('../libs/sequelize')

class CompradorService{
    constructor(){
        this.model=models.Comprador
    }
    async getAll(){
        const compradors= await this.model.findAll()
        return compradors
    }
    async getOne(id){
        const comprador=await this.model.findByPk(id)
        return comprador
    }
    async create(name,lastname,email,addres,phone){
        const comprador= await this.model.create({name,lastname,email,addres,phone})
        return comprador
    }
    async update(id,values){
        const comprador=await this.model.findByPk(id)
        if(!comprador)return null
        const updateComprador= await user.update(values)
        return updateComprador
    }
    async delete(id){
        const comprador =await this.getOne(id)
        if(!comprador)return null
        await comprador.destroy()
        return comprador.id
    }
}
module.exports= CompradorService