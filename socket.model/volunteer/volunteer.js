'use strict';

require('dotenv').config();
let faker=require('faker');
const io=require('socket.io-client');
const models = require('../../models/index');
const host=process.env.HOST ||'http://localhost:8000'
const socket=io.connect(`${host}/server`)

const {students}=require('../../models/index');

const handleVolunteer= async (req , res)=>{

    let id=req.userId;
    // let name=req.dataValues.userName;
    console.log('------------------> REQUISEt' , req)
    console.log("-------------------> ID",id);
   
      let Record= await students.findOne({where:{id:id}});
      let name=Record.dataValues.userName;
      console.log("-------------------> NAME",name);
       
    let UserData=
    {
        student:name,
        id:id,
        role:'volunteer'
   
    };

    
    socket.emit('volunteer' , UserData);
   res.json("thanks for help >> see you soon !!!");
 
    
} 

module.exports=handleVolunteer;


  
  


