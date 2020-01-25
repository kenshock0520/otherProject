//const express = require('express');
const cooperateApi1 = require('../actions/cooperateApi1')
const logger  = require('../../modules/logger');

module.exports = {
  execute: async function (req, res,next) {
    logger.access.info("test1BL:req:"+req);
    logger.access.info("test1BL:res:"+res);
    let val = "";
    val = await cooperateApi1(req, res,next);
//    const resApi1 = await promise;
    
    logger.access.info("api1Res2:"+val);
    res.status(201).send(val);
  }
}