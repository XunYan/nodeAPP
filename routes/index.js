var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('login', { title: 'login' });
    console.log('get/')
    res.sendfile("./public/login.html")
});

module.exports = router;
