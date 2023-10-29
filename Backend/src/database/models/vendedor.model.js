const {DataTypes, Model}= require('sequelize')

const VENDEDOR_TABLE= 'vendedors'

const VendedorSchema ={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
}
class Vendedor extends Model{
    static associate(models) {}
    static config(sequelize){
        return {sequelize,tableName:VENDEDOR_TABLE,modelName: 'Vendedor',timestamps: false}
    }
}
module.exports= {VENDEDOR_TABLE,VendedorSchema,Vendedor}