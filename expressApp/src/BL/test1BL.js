//const express = require('express');
const cooperateApi1 = require('../actions/cooperateApi1');
const cooperateApi2 = require('../actions/cooperateApi2');
const logger  = require('../../modules/logger');

module.exports = {
  execute: async function (req, res,next) {
    logger.access.info("test1BL:req:"+req);
    logger.access.info("test1BL:res:"+res);
    let val = "";
    let val2 = "";
    try{

      val = await cooperateApi1(req, res,next);
      val2 = await cooperateApi2(req, res,next,val);
    }catch(err){
      logger.access.info("error");
    }

    res.status(val2.statusCode).send(val2.body);
    

//    const resApi1 = await promise;
    
    logger.access.info("api1Res2:"+val);
    logger.access.info("api1Res2-2:"+val2);
    
  }
}