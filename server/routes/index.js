let express = require('express');
let router = express.Router();
let indexController = require("../controller/index")

/* GET home page. */

router.get('/', indexController.displayHomePage
/*function(req, res, next) {
  res.render('index', { 
    title: 'INFR3210',
    }); //injecting title into index.ejs
  //render is look for a page. in app.js in main folder we already mentioned what index it is
}
*/
);

router.get('/home', indexController.displayHomePage
/*
function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
    });
}
*/
);

router.get('/about', indexController.displayAboutPage
/*
function(req, res, next) {
  res.render('index', { 
    title: 'about',
    });
}
*/
);

router.get('/projects', indexController.displayProjectsPage
/*
function(req, res, next) {
  res.render('index', { 
    title: 'projects',
    });
}
*/
);

router.get('/contactme', indexController.displayContactPage
/*
function(req, res, next) {
  res.render('index', { 
    title: 'contact me',
    });
}
*/
);

/*
router.get('/book-list', function(req, res, next) {
  res.render('index', { 
    title: 'book list',
    });
});
*/

module.exports = router;
