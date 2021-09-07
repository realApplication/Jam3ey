'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);

socket.on('supervisor' , (data)=>{
    console.log('supervisor',data);
    socket.emit('classRoom', 'we give you class room ' )
} );


