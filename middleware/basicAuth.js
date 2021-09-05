'use strict';

const base64 = require('base-64')

const {students}=require('../models/index');
module.exports = (req, res, next) => {
    console.log("req.headers['authorization']",req.headers['authorization']);
    if (!req.headers['authorization']) {
        next('No Authorization info');
        return;
    }

    let basicHeaderParts = req.headers.authorization.split(' '); 
    console.log("HEADERS--------------->" , basicHeaderParts)
    let encoded = basicHeaderParts.pop();
    console.log('encode',encoded);
    let decoded = base64.decode(encoded); 
    let [email, password] = decoded.split(":"); 
    console.log('---------------------------',email , password);
    students.authenticateBasic(email, password).then(validUser=> {
        req.user = validUser;
        next();
    }).catch(err=> next('invalid users'));
}