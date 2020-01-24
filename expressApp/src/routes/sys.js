var express = require('express');
var router = express.Router();
var headerCheck = require('../actions/headerCheck')

//対応するメソッド分記載してヘッダチェックに渡す
router.get('/*', headerCheck.checkHeader);
router.post('/*', headerCheck.checkHeader);
router.delete('/*', headerCheck.checkHeader);
router.put('/*', headerCheck.checkHeader);
router.trace('/*', headerCheck.checkHeader);
router.options('/*', headerCheck.checkHeader);


module.exports = router;
