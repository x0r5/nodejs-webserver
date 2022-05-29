if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', ()=>console.log('Connected to MongoDB'));
app.set('view engine', 'ejs'); //or we can use pug
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);