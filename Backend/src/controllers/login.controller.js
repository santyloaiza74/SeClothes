const LoginService= require('../service/login.service')

class LoginController{
    constructor(){
        this.service= new LoginService()
    }
    async index(){
        const users= await this.service.getAll()
        return users
    }
    async findOne(id){
        const user= await this.service.getOne(id)
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        delete user.dataValues.password
        return user
    }
    async create(username,password,status){
        const user = await this.service.create(username,password,status)
        return user
    }
    async update(id, values){
        const user = this.service.update(id,values)
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        return user
    }
    async delete(id){
        const user = this.service.delete(id)
        if(!user)
        {
            throw new Error('No se encontro el usuario')
        }
        return user
    }

}
module.exports= LoginController