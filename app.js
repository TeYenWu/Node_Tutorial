
var express = require('express')
var app = express()
var user = require('./routes/user');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = 4040


app.listen(port);


app.set('views', 'views');
app.set('view engine', 'jade');


var options = {
  maxAge: '31557600000'
}

app.use(express.static('public', options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// load the cookie-parsing middleware
app.use(cookieParser());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use('/user', user)

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function(req, res){
    res.render('home', {title:"吳德彥", myPosts: [{"title":"Test", "date":"2016.10.8", "body":"123456"}]})
});

app.get('/about', function(req, res){
    res.send('Welcome to the about page!');
});




// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

console.log('start express server\n');