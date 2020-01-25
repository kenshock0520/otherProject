//const request = require('request-promise');
const request = require('request');

const env = require('../../config/environment/index');
const logger  = require('../../modules/logger');


const url = env.API1_URL();
const options = {
  url: url,
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  },
  resolveWithFullResponse: true, // <--- これを入れないと responseオブジェクトが取得できない！！
  simple: true
};

const get_ip_promise = (req, res, next) => {
  return new Promise(function (resolve, reject) {
    request(options, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = get_ip_promise;