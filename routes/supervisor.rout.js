'use strict'
const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/basicAuth');
const { 
    addRoom,
    deleteRoom,
    getRoom } = require('../controller/super.controller');
 
const {supervisor} = require('../models/index')
const signin = require('../controller/signinsupervisor')
const signup = require('../controller/signupsupervisor')

router.post('/v1/signup',signup);
router.post('/v1/signin',basicAuth(supervisor),signin);


router.get('/v1/data/:id', getRoom);
router.get('/v1/data', getRoom);
router.post('/v1/data',addRoom );
router.delete('/v1/data/:id', deleteRoom );

module.exports = router;