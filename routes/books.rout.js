'use strict'
const express = require('express');
const router = express.Router();

const {
    getBooks,
    addBooks,
    deleteBooks,
    getPickedBooks,
    addPickedBooks,
    deletePickedBooks

} =require('../controller/book.controller')

router.get('/book/:id', getBooks);
router.get('/book', getBooks);
router.post('/book',addBooks );
router.delete('/book/:id',deleteBooks );
router.get('/pickedbook',getPickedBooks)
router.post('/pickedbook/:id',addPickedBooks)
router.delete('/pickedbook/:id',deletePickedBooks)

module.exports = router;