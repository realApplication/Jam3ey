'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const studentRout = require('./routes/student.rout');
const supervisorRout = require('./routes/supervisor.rout');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');

app.get('/',(req,res)=>{
    res.send('helloooooooo')
})
app.use(studentRout);
app.use(supervisorRout);
app.use(errorHandler);
app.use(notFound)
app.use(express.urlencoded({ extended: true }));



const start=(port)=>{
    app.listen(port,()=>console.log(`listining to port :  ${port}` ))
}

module.exports={
    start:start,
    app:app
};