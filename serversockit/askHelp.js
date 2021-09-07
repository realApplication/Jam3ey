'use strict'

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);
const {pickedSchema}=require('../models/index')

let askHelp= async (req , res)=>{
    let id=req.userId;
    let Record= await pickedSchema.findOne({where:{userId:id}});
    // console.log(Record);
  try {      
  let UserData=
  {
      studentId:Record.dataValues.userId,
      bookId:Record.dataValues.id,
     
  };
  socket.emit('helpstudent' , UserData);
 res.json("will hear it from us soon");
}
catch(err)
{
    res.status(500).json('you need to pick book first ...')
}


}

module.exports=askHelp;