//const express = require('express');
const test1BL = require('../BL/test1BL');
//const Users = require('../models/Users');
//const Views = '../views/'

module.exports = {
  checkHeader: function (req, res, next) {
    const blHeader = req.header('x-sys-header');
    console.log("blHeader:"+blHeader);
    if(blHeader === "test1BL"){
        test1BL.execute(req,res,next);
    }else{
        console.log("header none")
    }
    res.status(200).send();
  }
}