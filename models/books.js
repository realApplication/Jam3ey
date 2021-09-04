
'use strict';
require('dotenv').config();
// const bcrypt = require('bcrypt');
// const jwt=require('jsonwebtoken');


const bookSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('booksproject', {
    title: { type: DataTypes.STRING, allowNull: false},
    author: { type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false}

  });
  return model;
}

module.exports = bookSchema;