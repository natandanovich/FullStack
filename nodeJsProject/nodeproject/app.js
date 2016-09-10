var express = require('express');
var app = express();

var port = 3000;

app.get('/', function (req,res) {
    res.send('Hello World');
});

app.get('/routing', function (req,res) {
    res.send('Hello Rounting');
});

app.listen(port, function (err) {
    if (err.message != '') {
      console.log(err.message)
    }
    console.log('The server is running on port: ' + port);
});