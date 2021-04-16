var express = require('express');
var router = express.Router();

/* 产品 */
router.get('/', function(req, res, next) {
  // TODO: 排行榜数据
  let rowArray = Array.from(new Array(3), (x,i) => i);
  res.render('reaction', {
    rowArray: rowArray,
    length: 9,
    title: "反应测试"
  });
});

module.exports = router;