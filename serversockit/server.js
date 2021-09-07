'use strict';
const app = require('express')()
const io = require('socket.io')(7893)
const cors = require('cors');
const {setCounter,getCounter} = require('./conuterbook')
app.use(cors());

let date = new Date();
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
let time = date.toLocaleTimeString()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

io.on('connection', socket => {
  console.log("CONNECTED", socket.id)

  socket.on('helpstudent',async payload => {
    console.log('event', {
      event: 'ask for help ....... ',
      payload: payload
    });
    // console.log('payload.bookId',payload.bookId);
    let getcounter = await getCounter(payload.bookId)
   
    let count = parseInt(getcounter)
    // console.log('counter----------------------------',count);
    count+=1;
    await setCounter(payload.bookId,count);
  });

  socket.on('volunteerdata', async(payload) => {
    console.log('event', {
      event: 'pickup',
      time: `day: ${day} Time :${time}`,
      payload: payload
    });
    let getcounter = await getCounter(payload.bookid)
    let getcount = parseInt(getcounter)
    let recervedata = {
      name:payload,
      studentsNum : getcount,
      time :`day: ${day} Time :${time}`
    }
    if(getcount>=5)
       {
         io.emit('supervisor', recervedata)
       }      
  });

  socket.on('classRoom',data=>{
    io.emit('mainwall',data)
  })

});



