'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);

socket.on('mainwall',data=>{
  console.log('will be class in', data.className, 'The volunter will be ' ,data.volunteerName,
 'Number of student ', data.studentNum ,'  at : (', data.time,  ')   Wellcome students .....')
});