'use strict';
const { DataTypes } = require('sequelize')
const { PRODUCTO_TABLE } = require('../models/producto.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTO_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        auntoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subasta_id: {
        type: DataTypes.INTEGER
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos')
  }
};
