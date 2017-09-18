//npm libraries
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//files
var UserRouter = require('./server/routes/user');
app.use(express.static('client', {index: 'views/index.html'}));
var config = require('./server/config/config');

// app.use('/admin', AdminRouter);
app.use('/user', UserRouter);



var server = app.listen(config.port, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});




// app.listen(config.port);
