const express = require('express')
const app = express();

app.set('view engine', 'ejs'); //or we can use pug

app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index");
})

app.listen(3000);