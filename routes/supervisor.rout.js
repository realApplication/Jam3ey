'use strict'
const express = require('express');
const router = express.Router();

const signin = require('../controller/signinsupervisor')
const signup = require('../controller/signupsupervisor')

router.post('/v1/signup',signup)
router.post('/v1/signin',signin)
module.exports = router;