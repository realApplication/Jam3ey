'use strict';
const app = require('express')()
// const http = require('http').createServer(app)
const io = require('socket.io')(7892)
const uuid = require('uuid').v4;
const cors = require('cors');
app.use(cors());

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();});

const studentData = {
  data : {}
}

io.on('connection', socket => {
  console.log("CONNECTED", socket.id)
  socket.on('pickedbook', (studentsdata)=> {
      console.log('sockit io data' , studentsdata);
      const id = uuid();   
      studentData.data[id] = studentsdata;
      console.log(Object.keys(studentData.data).length);
    if(Object.keys(studentData.data).length>=3)
     {
      io.emit('volunteer',(Object.keys(studentData.data).length));
     }
    });
    socket.on('picked',data=>{
      console.log('piked ' ,data);
      io.emit('supervisor',studentData.data);   
    })
    socket.on('classRoom', data=>{
      console.log('classRoom',data);
      io.emit('sendresp',data);
  })

});









































    // socket.emit('volunteer',(Object.keys(msgQueueClient.data).length));
//    socket.on('volunteer' , (data)=>{
//     console.log('volunteer',data);
    
// } );

//   socket.on('admin_msg', ({ name, message })=> {
//     console.log("adding a new task ....")
//     const id = uuid();
//     console.log("id ====> ", id)
//     msgQueueAdmin.data[id] = { name, message };
   
//     discord.emit('admin-data', { name: msgQueueAdmin.data[id].name,message: msgQueueAdmin.data[id].message,id:id });
//   //   console.log("after add msgQueueAdmin ========> ", msgQueueAdmin);
   
//   console.log(msgQueueAdmin.data[id].name,msgQueueAdmin.data[id].message);
// });

// socket.on('accept_msg',(msg)=>{
//   console.log('===================');
//   console.log('msg------>',msg.accept,msg.gotmsg);
//   // const acceptmsg = msgQueueClient.data[msg.id] ;
//   discord.emit('sendaccept',{msgreq:msg.accept,massage:msg.gotmsg})

// })

// socket.on('ignore_msg',(msg)=>{
//   // const ignoremsg = msgQueueClient.data[msg.id] ;
//   console.log('ignnnnnnnnnoooore',msg.ignore,msg.gotmsg);
//   discord.emit('sendignore',{msgreq:msg.ignore,massageig:msg.gotmsg})

// })

//   socket.on('get_all', ()=> {
//       console.log("get_all : all messages from client ")
//       Object.keys(msgQueueClient.data).forEach(id=> {
//           socket.emit('res-client', {name: msgQueueClient.data[id].name,message: msgQueueClient.data[id].message,id:id });
//       });
//   });
  
//   socket.on('get_all-client', ()=> {
//       console.log("get_all-client : all messages from admin")
//       Object.keys(msgQueueAdmin.data).forEach(id=> {
//           socket.emit('admin-data', { name: msgQueueAdmin.data[id].name,message: msgQueueAdmin.data[id].message ,id:id});
//     });
//   });

//   socket.on('received-client', id => {
//       console.log("admin received from client messages on queue will remove it ...")
//       // he child confirmed receiving , remove from queue
//       delete msgQueueClient.data[id];
//       console.log("after delete msgQueueClient @@@@@@@@@@ ", msgQueueClient)
//   })
//   socket.on('received-admin', id => {
//     console.log("client received from admin messages on queue will remove it ...")
//     // he child confirmed receiving , remove from queue
//   //   discord.emit('res-client','your message has been recevied');
//     delete msgQueueAdmin.data[id];
//     console.log("after delete msgQueueAdmin @@@@@@@@@@ ", msgQueueAdmin)
// })

  
// http.listen(7000, function() {
//   console.log('listening on port 7000')
// })
// app.get('/', function(req,res) {
//   res.send('connected')
// })




