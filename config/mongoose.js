const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pracise', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in DB'));

db.once('open', function() {
    console.log('Connected to database');
});

module.exports = db;