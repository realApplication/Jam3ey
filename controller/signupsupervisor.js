'use strict'
const base64 = require('base-64');
const { supervisor } = require('../models/index');

module.exports=async (req,res)=>{
    try {
        let studenData = await supervisor.create(req.body);
        const output = {
          supervisor: studenData 
        };
        res.status(201).json(output);
      } catch (e) {
        _authError()
      }
      function _authError() {
        res.status(403).send('Invalid SignUp');
      }
}