'use strict';
const {DataTypes}=require('sequelize')
const {VENDEDOR_TABLE}=require('../models/vendedor.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(VENDEDOR_TABLE,{
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendedors')
  }
};
