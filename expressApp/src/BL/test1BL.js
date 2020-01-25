//const express = require('express');
const cooperateApi1 = require('../actions/cooperateApi1')
const logger  = require('../../modules/logger');

module.exports = {
  execute: function (req, res,next) {
    console.log("test1BL:req:"+req);
    console.log("test1BL:res:"+res);
    const resApi1 = cooperateApi1(req, res,next);
    logger.express("api1Res:"+resApi1);

    res.status(201).send();
  }
}