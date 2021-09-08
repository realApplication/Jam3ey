'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const bookSchema = require('./books-Schema');
const pickedSchema = require('./picked-Schema');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://hgfftifyfcvngq:c3204ccd6ff3f4cd51773b91b4d13f15ead5c7c71511188b782f427fc9e4a111@ec2-54-195-195-81.eu-west-1.compute.amazonaws.com:5432/d1qph4sfpa9p3j'
//|| 'postgres://localhost:5432/samah-abujwaied'

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







