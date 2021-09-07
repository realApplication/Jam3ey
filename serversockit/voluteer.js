'use strict';

require('dotenv').config();

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);
const {students}=require('../models/index');

const handleVolunteer= async (req , res)=>{

    let id=req.userId;
      let Record= await students.findOne({where:{id:id}});
      let name=Record.dataValues.userName;
       
    let UserData=
    {
        student:name,
        id:id,
        role:'volunteer'
   
    };
    socket.emit('volunteerr' , UserData);
   res.json("thanks for help >> see you soon !!!");
 
    
} 

module.exports=handleVolunteer;


// 'use strict';

// const client = require('socket.io-client');
// const host = "http://localhost:7893";
// const socket = client.connect(host);

// socket.on('volunteer' , (data)=>{
//     console.log('volunteer',data);
//         console.log('greater than 3');
//         socket.emit('picked','samah')
    
// } );
// socket.on('sendresp',data=>{
//     console.log('send response',data);
// })

