'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/samah-abujwaied'

let sequelize = new Sequelize(DATABASE_URL,);
const userModel = require('./student-Schema')
const supervisorMOdel = require('./supervisor-Schema')

module.exports = {
    db: sequelize,
    students: userModel(sequelize, DataTypes),
    supervisor : supervisorMOdel(sequelize,DataTypes)
};