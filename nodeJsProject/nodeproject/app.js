var express = require('express');
var app = express();

var port = 3000;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var eventsData =[ {
    name: 'Event 1',
    description: 'The First Event',
    date: '2016.01.02',
    time: '2:00 PM',
    duration: '1 Hours',
    location: {
    streetAddr: '303 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 200
    },
    {
    name: 'Event 2',
    description: 'The Second Event',
    date: '2016.02.07',
    time: '2:00 PM',
    duration: '2 Hours',
    location: {
    streetAddr: '303 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 100
    },
    {
    name: 'Event 3',
    description: 'The Third Event',
    date: '2016.03.03',
    time: '3:00 PM',
    duration: '3 Hours',
    location: {
    streetAddr: '303 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 300
    },
    {
    name: 'Event 4',
    description: 'The Fourth Event',
    date: '2016.10.03',
    time: '1:00 PM',
    duration: '5 Hours',
    location: {
    streetAddr: '303 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 350
    }
];

eventRouter.route('/').get(function (req,res) {
    res.render('events',{
            list: ['first event', 'second event', 'third event'],
            nav: [{Link: 'Services', Text: 'Services'},
                {Link: 'Portfolio', Text: 'Portfolio'},
                {Link: 'About', Text: 'About'},
                {Link: 'Team', Text: 'Team'},
                {Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}],
        events : eventsData
    });
});

eventRouter.route('/event').get(function (req,res) {
    res.send('Hello Single Event World');
});

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