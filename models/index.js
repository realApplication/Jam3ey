'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books-Schema');
const pickedSchema = require('./picked-Schema');
const counterSchema = require('./counter-Schema')
const POSTGRES_URI =  process.env.DATABASE_URL //|| "postgres://localhost:5432/samah-abujwaied";

let sequelizeOptions = {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
} ;

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const userModel = require('./student-Schema')
const supervisorMOdelTest = require('./supervisor-Schema')
const superModel = require('./room-Schema')

const bookSchemas =bookSchema(sequelize, DataTypes)
const userModels=userModel(sequelize, DataTypes)
const pickedSchemas=pickedSchema(sequelize, DataTypes)
const counterSchemas=counterSchema(sequelize, DataTypes)
const superSchemas = superModel(sequelize, DataTypes)
//const supervisor=supervisorMOdel(sequelize,DataTypes)

module.exports = {
    db: sequelize,
    students: userModels,
    supervisorTest : supervisorMOdelTest(sequelize,DataTypes),
    books: bookSchemas,
    pickedSchema: pickedSchemas,
    counterSchema:counterSchemas,
    superSchema:superSchemas
};







