'use strict';

require('dotenv').config();
const client = require('socket.io-client');


const host = process.env.HOST || "https://jameey.herokuapp.com/";
const socket = client.connect(host);

// const host = process.env.HOST || "http://localhost:7893";
// const socket = client.connect(host);
let client = new pg.Client({
    user: "admin",
    password: "guest",
    database: "Employees",
    port: 5432,
    host: "localhost",
    ssl: true
}); 
const socket = client.connect();

const {superSchema}= require('../models/index')

socket.on('supervisor' , async(data)=>{
    let ranId = Math.floor(Math.random() * 4);
    let counterData = await superSchema.findOne({where:{id:ranId}})
    console.log('counterData-------->',counterData);
    console.log('counterData----dataValues---->',counterData.dataValues);

     let classdata ={
         volunteerName : data.name.student,
         studentNum : data.studentsNum,
         className:counterData.dataValues.classroom,
         time:data.time,
         bookNameID:data.name.bookid
     }
    socket.emit('classRoom', classdata )
} );


