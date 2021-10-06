'use strict'
const express = require('express');
const router = express.Router();
const bearerAuth = require("../middleware/bearerAuth");
const handleVolunteer=require("../serversockit/volunteer")
const handleHelp = require("../serversockit/askHelp")
const {
    getBooks,
    addBooks,
    deleteBooks,
    getPickedBooks,
    addPickedBooks,
    deletePickedBooks,
    getPickedBooksByUserId,
    getBooksById
    
} =require('../controller/book.controller')

const {addCounter,getCounter,deleteCounter} = require('../controller/counter.controller')

router.get('/book/:id', getBooks);
router.get('/book', getBooks);
router.post('/book',addBooks );
router.delete('/book/:id',deleteBooks );
router.get('/bookid/:id', getBooksById);



///////////////////////////////new route send user id

router.get('/pickedbook/:id',bearerAuth,getPickedBooksByUserId)


router.get('/volunteer' , bearerAuth , handleVolunteer)
router.get('/askhelp' , bearerAuth , handleHelp)

router.get('/Counter', getCounter);
router.post('/Counter' , addCounter)
router.delete('/Counter/:id',deleteCounter );

router.get('/pickedbook',bearerAuth,getPickedBooks)
router.post('/pickedbook/:id',bearerAuth,addPickedBooks)
router.delete('/pickedbook/:id',bearerAuth,deletePickedBooks)

module.exports = router;