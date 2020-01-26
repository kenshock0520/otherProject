//const request = require('request-promise');
const request = require('request');
const logger  = require('../../modules/logger');




const test = (req, response, next,value) => {
  logger.access.info("aaaa");
  const options = {
    url: "http://localhost:80/"+req.url,
    method: req.method,
    headers: req.headers,
    resolveWithFullResponse: true, // <--- これを入れないと responseオブジェクトが取得できない！！
    simple: true
  };


  return sendRequest(options, "");
}

async function sendRequest(opts,replyData){
  return new Promise((resolve,reject)=>{
      logger.access.info('Promiseの引数の関数開始');
      request(opts, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          resolve(body);
        } else {
          reject(error);
        }
      });
  });
}

module.exports = test;
