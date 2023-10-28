const {models}=require('../libs/sequelize')

class LoginService{
    constructor(){
        this.model=models.Login
    }
    async getAll(){
        const users= await this.model.findAll()
        return users
    }
    async getOne(id){
        const user=await this.model.findByPk(id)
        return user
    }
    async create(username,password,status){
        const user= await this.model.create({username,password,status})
        return user
    }
    async update(id,values){
        const user=await this.model.findByPk(id)
        if(!user)return null
        const updateUser= await user.update(values)
        return updateUser
    }
    async delete(id){
        const user =await this.getOne(id)
        if(!user)return null
        await user.destroy()
        return user.id
    }
}
module.exports= LoginService