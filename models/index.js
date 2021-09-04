'use strict';

require('dotenv').config();



const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books');
const pickedSchema = require('./pickedBooks/pickedSchema');

const DATABASE_URL = "postgres://localhost:5432/thaerbraizat"

// userModel.hasMany(orderModel, { foreignKey: 'customerId', sourceKey: 'id'});
// orderModel.belongsTo(userModel, { foreignKey: 'customerId', targetKey: 'id'});

const sequelize = new Sequelize(DATABASE_URL, {});

module.exports = {
    db: sequelize,
    books: bookSchema(sequelize, DataTypes),
    pickedSchema: pickedSchema(sequelize, DataTypes)
}
