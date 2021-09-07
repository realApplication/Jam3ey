'use strict';
require('dotenv').config();

const counterbookSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('bookscounterschema', {
    idbook: {type: DataTypes.STRING, required: true, unique: true },
    counter: { type: DataTypes.STRING, required: true}
  });
  return model;
}

module.exports = counterbookSchema;