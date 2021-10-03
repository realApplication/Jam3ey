'use strict'
const express = require('express');
const router = express.Router();
const {students}  = require('../models/index');
const basicAuth = require('../middleware/basicAuth');
const bearerAuth = require("../middleware/bearerAuth");

const {
    getBooks,
    addBooks,
    deleteBooks,
    getPickedBooks,
    addPickedBooks,
    deletePickedBooks,
    getPickedBooksByUserId
    
} =require('../controller/book.controller')

router.get('/book/:id', getBooks);
router.get('/book', getBooks);
router.post('/book',addBooks );
router.delete('/book/:id',deleteBooks );



///////////////////////////////new route send user id

router.get('/pickedbook/:id',bearerAuth,getPickedBooksByUserId)

router.get('/pickedbook',bearerAuth,getPickedBooks)
router.post('/pickedbook/:id',bearerAuth,addPickedBooks)
router.delete('/pickedbook/:id',bearerAuth,deletePickedBooks)

module.exports = router;