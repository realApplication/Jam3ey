'use strict';

const bearerAuth = require('../middleware/bearerAuth');




require('dotenv').config();

const port=process.env.PORT||8000;
const io=require('socket.io')(port);
const serverSocket=io.of('/server');
// serverSocket.use(bearerAuth);

let date = new Date();
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

let time=date.toLocaleTimeString()

io.on('connection' , Socket=>{
    console.log('CONNECTION Has Established' , Socket.id)
});


serverSocket.on('connection',Socket=>{
    console.log("CONNECTION has Established" , Socket.id);
   
    Socket.on('volunteer',payload=>{
             console.log('event',{
                event:'pickup',
                 time:`day: ${day}   Time :${time}`,
                payload:payload
            });
           
          
});

});




// events.on('transit', payload=>{
//     console.log('event:',{
//         event:'transit',
//         time:`${year}-${month}-${day} Time ${time}`,
//         payload:payload
//     });
//     events.emit('driverTransit',payload);
// })

// events.on('delverd' , payload=>{
//     console.log('event:' , {
//         event:'deleverd',
//         time:`${year}-${month}-${day} Time ${time}`,
//         payload:payload
//     });
//     events.emit('driverDeleverd',payload);
// });

// events.on("driverDeleverd",payload=>{
//     console.log('event' , {
//       event:`customer ${payload.customerName} has recived the package`,
//       time:`${year}-${month}-${day} Time ${time}`,
//       payload:payload
//     })
// })

module.exports=serverSocket;
