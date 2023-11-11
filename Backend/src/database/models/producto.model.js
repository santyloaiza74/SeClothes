const {DataTypes,Model}=require('sequelize')

const PRODUCTO_TABLE= 'productos'

const ProductoSchema={
    id:{
        type:DataTypes.INTEGER,
        auntoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:true
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: true
    }
}
class Producto extends Model{
    static associate(models){
        this.hasOne(models.Subasta,{as:'subasta',foreignKey:'producto_id'})
    }
    static config(sequelize){
        return {sequelize, tableName: PRODUCTO_TABLE, modelName: 'Producto', timestamps: false}
    }
}
module.exports={PRODUCTO_TABLE,ProductoSchema,Producto}