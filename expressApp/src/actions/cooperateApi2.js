const request = require('request-promise');
//const request = require('request');
const logger  = require('../../modules/logger');




const test = async (req, response, next,value) => {
  logger.access.info("aaaa");
  const options = {
    url: "http://localhost:80/"+req.url,
    method: req.method,
    headers: req.headers,
    resolveWithFullResponse: true, // <--- これを入れないと responseオブジェクトが取得できない！！
    simple: true
  };

  return await sendRequest(options, "");
}

async function sendRequest(opts,replyData){

      logger.access.info('Promiseの引数の関数開始');
      return await request(opts);
}

module.exports = test;
