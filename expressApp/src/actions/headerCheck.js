//const express = require('express');
const test1BL = require('../BL/test1BL');
//const Users = require('../models/Users');
//const Views = '../views/'
const logger  = require('../../modules/logger');


module.exports = {
  checkHeader: async function (req, res, next) {
    const blHeader = req.header('x-sys-header');
    logger.access.info("blHeader:"+blHeader);
    if(blHeader === "test1BL"){
        await test1BL.execute(req,res,next);
    }else{
        //Header1不正
        res.status(400).send();
    }
    //res.status(200).send();
  }
}