'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7891";
const socket = client.connect(host);

socket.emit('pickedbook' , );
// socket.emit('client_msg', value);


// socket.on('admin-data', msg=> {
//     console.log("client got this msg from admin: ", msg)
//     socket.emit('received-admin', msg)
// })

// socket.on('res-client', msg=> {
//     console.log("admin got this msg: ", msg)
//     socket.emit('received-client', msg)

// })