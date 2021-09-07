'use strict'
const express = require('express');
const router = express.Router();

const signup = require('../controller/signup.controller');
const basicAuth = require('../middleware/basicAuth');
const {students} = require('../models/index')
router.post('/signin', basicAuth(students), (req, res, next)=> {
    res.status(200).json(req.user);
});

router.post('/signup',signup)
module.exports = router;