'use strict';
require('dotenv').config();
// const client = require('socket.io-client');

let client = new pg.Client({
  user: "admin",
  password: "guest",
  database: "Employees",
  port: 5432,
  host: "localhost",
  ssl: true
}); 
const socket = client.connect();
socket.on('mainwall',data=>{
  console.log('main wall data --->',data);
  console.log('will be class in', data.className, 'The volunter will be ' ,data.volunteerName,
 'Number of student ', data.studentNum ,'  at : (', data.time,  ')   Wellcome students .....')
});