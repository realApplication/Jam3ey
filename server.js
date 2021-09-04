'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

// const {
//     getBooks,
//     addBooks,
//     deleteBooks,
//     getPickedBooks,
//     addPickedBooks,
//     deletePickedBooks

// } =require('./controller/book.controller')
const studentRout = require('./routes/student.rout');
const supervisorRout = require('./routes/supervisor.rout');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const booksRout = require('./routes/books.rout');
app.get('/', (req, res) => { res.send("hello world");});

// app.get('/book/:id', getBooks);
// app.get('/book', getBooks);
// app.post('/book',addBooks );
// app.delete('/book/:id',deleteBooks );
// app.get('/pickedbook',getPickedBooks)
// app.post('/pickedbook/:id',addPickedBooks)
// app.delete('/pickedbook/:id',deletePickedBooks)


app.use(studentRout);
app.use(supervisorRout);
app.use(booksRout);
app.use(errorHandler);
app.use(notFound);

app.use(express.urlencoded({ extended: true }));

const start=(port)=>{
    app.listen(port,()=>console.log(`listining to port :  ${port}` ))
}

module.exports={
    start:start,
    app:app
};



