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
        field: 'subastaid' ,
        type:DataTypes.INTEGER,
        reference:{
            model: 'subastas',
            key: 'id'
        }
    }
}
class Puja extends Model{
    static associate(models){
        this.belongsTo(models.Subasta,{as:'subasta',foreignKey:'subasta_id'})
    }
    static config(sequelize){
        return {sequelize, tableName:PUJAS_TABLE, modelName: 'puja',timestamps: false}
    }
}
module.exports= {PUJAS_TABLE,PujasSchema,Puja}