'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books-Schema');
const pickedSchema = require('./picked-Schema');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/samah-abujwaied'

let sequelize = new Sequelize(DATABASE_URL,);
const userModel = require('./student-Schema')
const supervisorMOdel = require('./supervisor-Schema')
const counterModel = require('./booksCounter-Schema')
const superModel = require('./room-Schema')

const bookSchemas =bookSchema(sequelize, DataTypes)
const userModels=userModel(sequelize, DataTypes)
const pickedSchemas=pickedSchema(sequelize, DataTypes)
const counterSchema = counterModel(sequelize, DataTypes)
const superSchema = superModel(sequelize, DataTypes)

module.exports =  {
    db: sequelize,
    students: userModels,
    supervisor : supervisorMOdel(sequelize,DataTypes),
    books: bookSchemas,
    pickedSchema: pickedSchemas,
    counterSchema:counterSchema,
    superSchema:superSchema
};







