'use strict';

require('dotenv').config();

// const client = require('socket.io-client');
// const host = process.env.HOST || "http://localhost:7893";
// const socket = client.connect(host);
let client = new pg.Client({
  user: "admin",
  password: "guest",
  database: "Employees",
  port: 5432,
  host: "localhost",
  ssl: true
}); 
const socket = client.connect();
const {students}=require('../models/index');
const {pickedSchema}=require('../models/index')

const handleVolunteer= async (req , res)=>{

 
     try { let id=req.userId;
      let Record= await students.findOne({where:{id:id}});
      let name=Record.dataValues.userName;
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
   res.json(`Thank ${UserData.student} for volunteering `);
  }
  catch(err){
    res.status(200).json('Welcome volunteer : Please you need to pick book first .. Thank you ')
  }
 
    
} 

module.exports=handleVolunteer;

