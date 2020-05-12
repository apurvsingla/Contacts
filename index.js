const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

// setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({
    extended: 'true'
}));

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) {
        console.log('Error in running port', port);
        return;
    }
    console.log('Server running on Port: ', port);
});