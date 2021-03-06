var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('login', { title: 'login' });
    console.log(new Date().toLocaleString())
    var options = {
        root: path.resolve(__dirname, '../public/'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile("index.html", options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', "index.html");
        }
    });
});

/*login*/
router.post('/login', function(req, res, next) {
    //res.render('login', { title: 'login' });
    console.log(req.body)
    var options = {
        root: path.resolve(__dirname, '../public/'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.end()
});

module.exports = router;
