const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
app.use(cors());
const {db}=require('./models/index')
const PORT = process.env.PORT;

app.use(express.json());

const {
    getBooks,
    addBooks,
    deleteBooks,
    getPickedBooks,
    addPickedBooks,
    deletePickedBooks

} =require('./controllers/book.controller')

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/book/:id', getBooks);

app.get('/book', getBooks);

app.post('/book',addBooks );

app.delete('/book/:id',deleteBooks );



app.get('/pickedbook',getPickedBooks)

app.post('/pickedbook/:id',addPickedBooks)

app.delete('/pickedbook/:id',deletePickedBooks)







db.sync().then(() => {
    app.listen(process.env.PORT, () => console.log(`running on ${PORT}`))
}).catch((e) => {
    console.error(e)
});

