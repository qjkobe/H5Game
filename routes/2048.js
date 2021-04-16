var express = require('express');
var router = express.Router();

/* 产品 */
router.get('/', function(req, res, next) {
  // TODO: 排行榜数据
  res.render('2048', {
    title: "2048"
  });
});

module.exports = router;