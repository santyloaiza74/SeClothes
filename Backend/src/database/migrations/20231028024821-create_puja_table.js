'use strict';
const { DataTypes } = require('sequelize')
const { PUJAS_TABLE } = require('../models/pujas.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PUJAS_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pujas')
  }
};
