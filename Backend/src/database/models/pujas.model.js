const {DataTypes, Model}=require('sequelize')

const PUJAS_TABLE= 'pujas'

const PujasSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    precio:{
        type: DataTypes.FLOAT,
        allowNull: true
    },
    subasta_id:{
        type:DataTypes.INTEGER
    },
    producto_id:{
        type: DataTypes.INTEGER
    }
}
class Pujas extends Model{
    static associate(models){}
    static config(sequelize){
        return {sequelize, tableName:PUJAS_TABLE, modelName: 'puja',timestamps: false}
    }
}
module.exports= {PUJAS_TABLE,PujasSchema,Pujas}