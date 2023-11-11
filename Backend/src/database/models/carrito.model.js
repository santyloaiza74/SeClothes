const {DataTypes, Model}=require('sequelize')

const CARRITO_TABLE= 'carritos'

const CarritoSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}
class Carrito extends Model{
    static associate(models){}
    static config(sequelize){
        return {sequelize, tableName: CARRITO_TABLE, modelName: 'carrito', timestamps: false}
    }
}
module.exports= {CARRITO_TABLE,CarritoSchema,Carrito}