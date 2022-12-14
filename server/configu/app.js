let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
//3rd party packages and stuff, we can see them in package.json

//configure mongoDB
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to DataBase URI
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection; //not a function
mongoDB.on('error',console.error.bind(console,'Connection Error')); //checks for a connection error
mongoDB.once('open', ()=>{
  console.log('MongoDB connection successful. We are in B)'); //when it opens, confirmation message on console
})

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
//routers folder

let booksRouter = require('../routes/book');

//creating application
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); //oh look, its ejs, and it's in folder "/views"

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);  // localhost:3000/
app.use('/users', usersRouter); //localhost:3000/users
app.use('/book-list',booksRouter); //so it's straightforward


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//error for if someone is trying to access a site we've not mentioned

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    title:"Error"
  });
});

module.exports = app;
//to make it accessible to the whole project
//MVC = Model, View, Controller
// Model, conect logic
// View , pages
// controlers, logic behind routes