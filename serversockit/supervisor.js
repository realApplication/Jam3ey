'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7892";
const socket = client.connect(host);

socket.on('supervisor' , (data)=>{
    console.log('supervisor',data);
    socket.emit('classRoom', 'we give you class')
    // if(data>10){
    //     console.log('greater than 10');
    //     console.log( socket.emit('picked','samah'));
    //     socket.emit('picked','samah')
    // }

} );


