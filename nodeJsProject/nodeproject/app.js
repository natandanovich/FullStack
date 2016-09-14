var express = require('express');
var app = express();

var port = 3000;
var eventRouter = require('./src/routes/eventRoutes');
var dbRout

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/events', eventRouter)

app.get('/', function (req, res) {
    res.render('index', {
        list: ['first', 'second', 'third'],
        nav: [{Link: 'Services', Text: 'Services'},
            {Link: 'Portfolio', Text: 'Portfolio'},
            {Link: 'About', Text: 'About'},
            {Link: 'Team', Text: 'Team'},
            {Link: 'Contact', Text: 'Contact'},
            {Link: 'Events', Text: 'Events'}]
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