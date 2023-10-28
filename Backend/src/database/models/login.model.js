const {DataTypes,Model}= require('sequelize')

const LOGIN_TABLE = 'logins'

const LoginSchema= {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:true
    },
    status:{
        type: DataTypes.BOOLEAN
    }
}
class Login extends Model{
    static associate(models) {}
    static config(sequelize){
        return{ sequelize, tableName: LOGIN_TABLE,modelName: 'Login', timestamps: false}
    }
}
module.exports = {LOGIN_TABLE, LoginSchema, Login}