const express = require('express');
const router = express.Router();
const headerCheck = require('../actions/headerCheck');
const env = require('../../config/environment/index');
const logger  = require('../../modules/logger');



//エンドポイントは上からセットしたのが優先
router.get('/healthCheck', function(req, res, next) {
    logger.system.info("testLog出力")
    const api1Name = env.API1_URL();
    const api2Name = env.API1_URL();
    res.status(200);
    res.json({responceCode:"OK",api1:api1Name,api2:api2Name}).send();
});

  //対応するメソッド分記載してヘッダチェックに渡す
router.get('/*', headerCheck.checkHeader);
router.post('/*', headerCheck.checkHeader);
router.delete('/*', headerCheck.checkHeader);
router.put('/*', headerCheck.checkHeader);
router.trace('/*', headerCheck.checkHeader);
router.options('/*', headerCheck.checkHeader);


module.exports = router;
