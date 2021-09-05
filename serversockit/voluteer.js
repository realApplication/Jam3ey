'use strict';

const client = require('socket.io-client');
const host = "http://localhost:7892";
const socket = client.connect(host);

socket.on('volunteer' , (data)=>{
    console.log('volunteer',data);
    if(data>3){
        console.log('greater than 10');
        socket.emit('picked','samah')
    }

} );

socket.on('sendresp',data=>{
    console.log('sendresp',data);
})

