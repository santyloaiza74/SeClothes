'use strict';
const {PUJAS_TABLE}=require('../models/pujas.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PUJAS_TABLE,'subasta_id',{
      type: Sequelize.DataTypes.INTEGER,
      references:{
        model: 'subastas',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PUJAS_TABLE,'subasta_id')
  }
};
