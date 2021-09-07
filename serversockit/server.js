'use strict';
const app = require('express')()
// const http = require('http').createServer(app)
const io = require('socket.io')(7893)
const uuid = require('uuid').v4;
const cors = require('cors');
const {setCounter,getCounter} = require('./conterbook')
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

const studentData = {
  data: {}
}
io.on('connection', socket => {
  console.log("CONNECTED", socket.id)
  // socket.on('pickedbook', (studentsdata) => {
  //   const idx = uuid();
  //   studentData.data[idx] = studentsdata;;

    // for (const [key, obj] of Object.entries(studentData.data)) {
    //   if (obj.id == studentsdata.id)
    // }
    // for (let index = 0; index < Object.keys(studentData.data).length; index++) {
    //   if (studentsdata.id == studentData.data[idx].id)
    //     console.log('studentData.data');
    // }
    // if (Object.keys(studentData.data).length >= 3) {
    //   io.emit('volunteer', (Object.keys(studentData.data).length));
    // }
  // });

  socket.on('helpstudent',async payload => {
    console.log('event', {
      event: 'ask for help ....... ',
      payload: payload
    });
    
    let counter = await getCounter(payload.bookId)
    let count = parseInt(counter.counter)
    count+=1;
    let data = {
      bookid:count.bookId,
      counter:count
    }
    await setCounter(payload.bookId,count);

  });
  // socket.on('picked', data => {
  //   console.log(data, 'piked ');
  //   io.emit('supervisor', studentData.data);
  // })
  // socket.on('classRoom', data => {
  //   console.log('class Room : ', data);
  //   io.emit('sendresp', data);
  // })

  socket.on('volunteerr', payload => {
    console.log('event', {
      event: 'pickup',
      time: `day: ${day} Time :${time}`,
      payload: payload
    });
  });

});



