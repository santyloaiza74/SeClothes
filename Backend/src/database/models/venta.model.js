const {DataTypes,Model}=require('sequelize')

const VENTAS_TABLE= 'ventas'

const VentasSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type: DataTypes.DATEONLY,
        allorNull: true
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: true
    }
}
class Venta extends Model{
    static associate(models){
        
    }
    static config(sequelize){
        return {sequelize, tableName: VENTAS_TABLE, modelName: 'venta', timestamps:false}
    }
}
module.exports= {VENTAS_TABLE,VentasSchema,Venta}