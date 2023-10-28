const {DataTypes, Model}= require('sequelize')

const COMPRADOR_TABLE= 'compradors'

const CompradorSchema ={
    id:{
        type: DataTypes.INTEGER,
        auntoIncrement: true,
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
class Comprador extends Model{
    static associate(models) {}
    static config(sequelize){
        return {sequelize,tableName:COMPRADOR_TABLE,modelName: 'Comprador',timestamps: false}
    }
}
module.exports= {COMPRADOR_TABLE,CompradorSchema,Comprador}