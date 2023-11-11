const {DataTypes,Model}=require('sequelize')

const SUBASTA_TABLE= 'subastas'

const SubastaSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date_start:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    date_end:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    price_start:{
        type: DataTypes.FLOAT,
        allowNull:true
    },
    price_end:{
        type: DataTypes.FLOAT,
        allowNull:true
    },
    producto_id:{
        field: 'productoid',
        type: DataTypes.INTEGER,
        references:{
            model: 'productos',
            key: 'id'
        }
    }
}
class Subasta extends Model{
    static associate(models){
        this.hasMany(models.Puja,{as:'puja',foreignKey:'subastaid'})
        this.belongsTo(models.Producto,{as:'porducto',foreignKey:'producto_id'})
    }
    static config(sequelize){
        return {sequelize, tableName: SUBASTA_TABLE, modelName: 'subasta',timestamps: false}
    }
}
module.exports= {SUBASTA_TABLE,SubastaSchema,Subasta}