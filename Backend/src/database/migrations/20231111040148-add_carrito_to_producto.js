'use strict';
const {PRODUCTO_TABLE}=require('../models/producto.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PRODUCTO_TABLE,'carrito_id',{
      type: Sequelize.DataTypes.INTEGER,
      references:{
        model: 'carrito',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCTO_TABLE,'carrito_id')
  }
};
