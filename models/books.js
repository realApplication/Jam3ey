
'use strict';
require('dotenv').config();


const bookSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('booktest', {
    title: { type: DataTypes.STRING, allowNull: false , unique: true},
    author: { type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    // arrId:{type:DataTypes.ARRAY}


  });
  return model;
}

module.exports = bookSchema;