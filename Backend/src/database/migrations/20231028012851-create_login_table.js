'use strict';
const {DataTypes}= require('sequelize')
const {LOGIN_TABLE}= require('./../models/login.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(LOGIN_TABLE,{
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:true
    },
    status:{
        type: DataTypes.BOOLEAN
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('logins')
  }
};
