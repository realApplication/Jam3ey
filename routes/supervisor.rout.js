'use strict'
const express = require('express');
const { addRoom, deleteRoom, getRoom } = require('../controller/getSuper.controller');
const router = express.Router();

const signin = require('../controller/signinsupervisor')
const signup = require('../controller/signupsupervisor')
const basicAuth=require('../middleware/basicAuth')
const {supervisor}=require('../models/index')

router.post('/v1/signup',signup)
router.post('/v1/signin',basicAuth(supervisor),signin)


router.get('/v1/data/:id', getRoom);
router.get('/v1/data', getRoom);
router.post('/v1/data',addRoom );
router.delete('/v1/data/:id', deleteRoom );


module.exports = router;