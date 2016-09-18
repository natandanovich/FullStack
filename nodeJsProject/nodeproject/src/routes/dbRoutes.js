var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient

var eventsData = [{
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

dbRouter.route('/AddEventData').get(function (req, res) {
// res.send('Successful route test!');
    var url = 'mongodb://localhost:27017/eventsApp'
    mongodb.connect(url, function (err, db) {
        var collection = db.collection('events');
        collection.insertMany(eventsData, function (err, results) {
            res.send(results);
            db.close();
        })
    })
});

module.exports = dbRouter;