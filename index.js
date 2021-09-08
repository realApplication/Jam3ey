'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const {db}=require('./models/index')
const server = require('./server');
const port = process.env.PORT;

// const start=(port)=>{
//     app.listen(port,()=>console.log(`listining to port :  ${port}` ))
    
// }

db.sync().then(() => {
// start(port);

    app.listen(port,()=>console.log(`listining to port :  ${port}` ));
    

 });
