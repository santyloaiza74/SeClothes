'use strict';
const { DataTypes } = require('sequelize')
const { SUBASTA_TABLE } = require('../models/subasta.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(SUBASTA_TABLE, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date_start: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      date_end: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      price_start: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      price_end: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subastas')
  }
};
