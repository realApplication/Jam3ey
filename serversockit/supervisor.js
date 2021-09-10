'use strict';

require('dotenv').config();
const client = require('socket.io-client');

const host = process.env.HOST || "http://localhost:7893";
const socket = client.connect(host);
const {superSchema}= require('../models/index')

socket.on('supervisor' , async(data)=>{
    console.log(data);
    let ranId = Math.floor(Math.random() * 10);
    let counterData = await superSchema.findOne({where:{id:ranId}})
     let classdata ={
         volunteerName : data.name.student,
         studentNum : data.studentsNum,
         className:counterData.dataValues.classroom,
         time:data.time,
     }
    socket.emit('classRoom', classdata )
} );


