const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const Handlebars = require("handlebars");

// require('dotenv').config();

const app = express();

app.listen(3000, () => {
    console.log('Server started on port ' + 3000)
})

//Static files
app.use(express.static('public'));

//Templating Engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Define Routes
app.use('/', require('./routes/pages'));

Handlebars.registerHelper('isEqual', function (value1, value2) {
    return value1 == value2;
});

