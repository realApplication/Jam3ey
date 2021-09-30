
'use strict';
require('dotenv').config();


const bookSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('booksprojectabcd', {
    title: { type: DataTypes.STRING, allowNull: false},
    author: { type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    // arrId:{type:DataTypes.ARRAY}


  });
  return model;
}

module.exports = bookSchema;