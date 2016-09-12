var express = require('express');
var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    //res.send('Hello World');
    res.render('index', {
        list: ['first', 'second', 'third'],
        nav: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
    });
});


app.get('/routing', function (req, res) {
    res.send('Hello Rounting');
});

app.listen(port, function (err) {
    if (err) {
        console.log(err)
    }
    console.log('The server is running on port: ' + port);
});