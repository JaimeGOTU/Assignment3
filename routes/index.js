var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'INFR3210',
    }); //injecting title into index.ejs
  //render is look for a page. in app.js in main folder we already mentioned what index it is
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
    });
});

router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'about',
    });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'projects',
    });
});

router.get('/contactme', function(req, res, next) {
  res.render('index', { 
    title: 'contact me',
    });
});

module.exports = router;
