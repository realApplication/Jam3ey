'use strict';
require('dotenv').config();


const superSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('superdata', {
    classroom:{type: DataTypes.STRING, allowNull: true , unique: true},
    // helper: { type: DataTypes.STRING, allowNull: false},
    // std:{type: DataTypes.STRING, allowNull: false},

  });
  return model;
}

module.exports = superSchema;