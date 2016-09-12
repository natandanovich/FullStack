var express = require('express');
var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/', function (req,res) {
    res.send('Hello World');
});

app.get('/routing', function (req,res) {
    res.send('Hello Rounting');
});

app.listen(port, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('The server is running on port: ' + port);
});