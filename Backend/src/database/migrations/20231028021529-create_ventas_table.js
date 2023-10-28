'use strict';
const { DataTypes } = require('sequelize')
const { VENTAS_TABLE } = require('../models/venta.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(VENTAS_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: DataTypes.DATEONLY,
        allorNull: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      producto_id: {
        type: DataTypes.INTEGER
      },
      vendedor_id: {
        type: DataTypes.INTEGER
      },
      comprador_id: {
        type: DataTypes.INTEGER
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ventas')
  }
};
