//const express = require('express');

module.exports = {
  execute: function (req, res,next) {
    console.log("test1BL:req:"+req);
    console.log("test1BL:res:"+res);
    res.status(200).send();
  }
}