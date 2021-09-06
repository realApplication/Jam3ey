// 'use strict';

// const {supervisor}= require('../models/index');

// module.exports = async (req, res, next) => {

//   try {

//     if (!req.headers.authorization) { _authError() }
//     console.log("req.headers.authorization",req.headers.authorization);
//     console.log("HEADERS--------------->" , req.headers)
//     const token = req.headers.authorization.split(' ').pop();
//     console.log("----------###########----->", token)
//     const validUser = await supervisor.authenticateToken(token);
  
//     req.user = validUser;
//     console.log(req.user);
//     req.token = validUser.token;
//     req.userId=validUser.id;
//     next();

//   } catch (e) {
//     console.log(e);
//     _authError();
//   }

//   function _authError() {
//     next('Invalid Login');
//   }
// }