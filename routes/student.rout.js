'use strict'
const express = require('express');
const router = express.Router();

const signin = require('../controller/signin.controller')
const signup = require('../controller/signup.controller')

router.post('/signin',signin)
router.post('/signup',signup)
module.exports = router;