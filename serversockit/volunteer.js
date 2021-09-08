'use strict';

require('dotenv').config();

const client = require('socket.io-client');
// const host = process.env.HOST || "http://localhost:7893";
const socket = client.connect();
const {students}=require('../models/index');
const {pickedSchema}=require('../models/index')

const handleVolunteer= async (req , res)=>{

 
     try { let id=req.userId;
      let Record= await students.findOne({where:{id:id}});
      let name=Record.dataValues.userName;
      console.log('name',name);
      let volunteerpicked= await pickedSchema.findOne({where:{userId:id}});
      let bookid = volunteerpicked.dataValues.id;
    let UserData=
    {
        student:name,
        id:id,
        role:'volunteer',
        bookid:bookid
    };
    socket.emit('volunteerdata' , UserData);
   res.json("Thanks for asking to help , see you soon !!!");
  }
  catch(err){
    res.status(500).json('Welcome volunteer : Please you need to pick book first .. Thank you ')
  }
 
    
} 

module.exports=handleVolunteer;

