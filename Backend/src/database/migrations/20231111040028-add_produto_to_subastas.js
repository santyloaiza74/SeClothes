'use strict';
const {SUBASTA_TABLE}=require('../models/subasta.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(SUBASTA_TABLE,'producto_id',{
      type: Sequelize.INTEGER,
      references:{
        model: 'productos',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(SUBASTA_TABLE,'producto_id')
  }
};
