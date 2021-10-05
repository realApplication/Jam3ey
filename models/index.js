'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books-Schema');
const pickedSchema = require('./picked-Schema');
const counterSchema = require('./counter-Schema')
const POSTGRES_URI= process.env.DATABASE_URL ; // || 'postgres://localhost:5432/samah-abujwaied'
let sequelizeOptions = {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
  } ;
let sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);
const userModel = require('./student-Schema')
const supervisorMOdel = require('./supervisor-Schema')
const superModel = require('./room-Schema')

const bookSchemas =bookSchema(sequelize, DataTypes)
const userModels=userModel(sequelize, DataTypes)
const pickedSchemas=pickedSchema(sequelize, DataTypes)
const counterSchemas=counterSchema(sequelize, DataTypes)
const superSchemas = superModel(sequelize, DataTypes)

module.exports = {
    db: sequelize,
    students: userModels,
    supervisor : supervisorMOdel(sequelize,DataTypes),
    books: bookSchemas,
    pickedSchema: pickedSchemas,
    counterSchema:counterSchemas,
    superSchema:superSchemas
};







