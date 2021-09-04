'use strict';
require('dotenv').config();


const pickedSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('pickeds', {
    title: { type: DataTypes.STRING, allowNull: false},
    author: { type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    // userId: {type: DataTypes.INTEGER, allowNull: false}

  });
  return model;
}

module.exports = pickedSchema;