'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);
const {superSchema}= require('../models/index')

socket.on('supervisor' , async(data)=>{
    console.log(data);
    let ranId = Math.floor(Math.random() * 5);
    let counterData = await superSchema.findOne({where:{id:ranId}})
     let classdata ={
         volunteerName : data.name.student,
         studentNum : data.studentsNum,
         className:counterData.dataValues.classroom,
         time:data.time,
     }
    socket.emit('classRoom', classdata )
} );


