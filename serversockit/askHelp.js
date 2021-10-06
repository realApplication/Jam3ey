'use strict'
require('dotenv').config();


const host = process.env.HOST || "https://jameey.herokuapp.com/";
const client = require('socket.io-client');
const socket = client.connect(host);

// const host = process.env.HOST || "http://localhost:7893";
// const client = require('socket.io-client');
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


const {pickedSchema}=require('../models/index')

let askHelp= async (req , res)=>{

try {
    let id=req.userId;
    let Record = await pickedSchema.findOne({ where: { userId: id } });
    // console.log('Racourd ' , Record);
    let userId=req.userId;
 
    let data={

        title:Record.dataValues.title, 
        author:Record.dataValues.author,
        image:Record.dataValues.image,
        studentId:Record.dataValues.userId,
        bookId:Record.dataValues.id
    };
    // console.log('data ---->',data);
    req.body=data;
    let dataTest=await pickedSchema.findOne({where :{ userId :userId ,title:Record.dataValues.title}});
    console.log('data test ',dataTest);
    if(dataTest){
        console.log('data test in if  ---->');
         socket.emit('helpstudent' , data);
          res.status(200).json("will hear it from us soon");
    }
   else{
        let book = await pickedSchema.create(data)  
        res.status(200).json(book);

        }       
}
catch (err) {

    res.status(200).json('You need to pick course first ..')
}

}

module.exports=askHelp;