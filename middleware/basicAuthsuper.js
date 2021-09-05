'use strict';

const base64 = require('base-64')

const {supervisor}=require('../models/index');
module.exports = (req, res, next) => {
    // console.log("req.headers['authorization']",req.headers['authorization']);
    if (!req.headers['authorization']) {
        next('No Authorization info');
        return;
    }
    let basicHeaderParts = req.headers.authorization.split(' '); 
    let encoded = basicHeaderParts.pop();
    let decoded = base64.decode(encoded); 
    let [email, password] = decoded.split(":"); 
    supervisor.authenticateBasic(email, password).then(validUser=> {
        req.user = validUser;
        next();
    }).catch(err=> next('invalid users'));
}