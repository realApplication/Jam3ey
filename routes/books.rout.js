'use strict'
const express = require('express');
const router = express.Router();
const bearerAuth = require("../middleware/bearerAuth");
const handleVolunteer=require('../serversockit/voluteer')
const handleHelper=require('../serversockit/askHelp')

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

router.get('/volunteer' , bearerAuth , handleVolunteer)
router.get('/askHelp',bearerAuth , handleHelper)

router.get('/pickedbook',bearerAuth,getPickedBooks)
router.post('/pickedbook/:id',bearerAuth,addPickedBooks)
router.delete('/pickedbook/:id',bearerAuth,deletePickedBooks)

module.exports = router;