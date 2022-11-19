let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index', { 
    title: 'Home Page'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { 
      title: 'about',
      });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { 
      title: 'projects',
      });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { 
      title: 'contactme',
      });
}