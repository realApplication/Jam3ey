
'use strict';
require('dotenv').config();

const bookSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('testbookk', {
    title: {type: DataTypes.STRING, allowNull: false,required: true, unique: true  },
    author: { type: DataTypes.STRING,allowNull:false, required: true},
    image:{type: DataTypes.STRING,required: true},

  });
  return model;
}

module.exports = bookSchema;