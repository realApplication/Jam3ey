'use strict'
const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/basicAuthsuper');

const signin = require('../controller/signinsupervisor')
const signup = require('../controller/signupsupervisor')

router.post('/v1/signup',signup)
router.post('/v1/signin',basicAuth,signin)
module.exports = router;