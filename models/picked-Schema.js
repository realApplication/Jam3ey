'use strict';
require('dotenv').config();


const pickedSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('courses112234', {
    title: { type: DataTypes.STRING, allowNull: false},
    author: { type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    userId: {type: DataTypes.INTEGER}
  });
  return model;
}

module.exports = pickedSchema;

