'use strict';
const { DataTypes } = require('sequelize')
const { CARRITO_TABLE } = require('../models/carrito.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CARRITO_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carritos')
  }
};
