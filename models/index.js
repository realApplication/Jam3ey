'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books');
const pickedSchema = require('./picked-Schema');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/proj'

let sequelize = new Sequelize(DATABASE_URL,);
const userModel = require('./student-Schema')
const supervisorMOdel = require('./supervisor-Schema')

const bookSchemas =bookSchema(sequelize, DataTypes)
const userModels=userModel(sequelize, DataTypes)
const pickedSchemas=pickedSchema(sequelize, DataTypes)

// userModels.hasMany(bookSchemas, { foreignKey: 'customerId', sourceKey: 'id'});
// bookSchemas.belongsTo(userModels, { foreignKey: 'customerId', targetKey: 'id'});

// userModels.hasMany(pickedSchemas, { foreignKey: 'userId', sourceKey: 'id'});
// pickedSchemas.belongsTo(userModels, { foreignKey: 'userId', targetKey: 'id'});


module.exports = {
    db: sequelize,
    students: userModels,
    supervisor : supervisorMOdel(sequelize,DataTypes),
    books: bookSchemas,
    pickedSchema: pickedSchemas
};







