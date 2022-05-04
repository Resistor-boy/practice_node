'use strict'

// MODULE
const express = require('express')
const app = express();
const PORT = 3000;

//SETTING APP
app.set('src/views', './src/views');
app.set('view engine', 'ejs')

// ROUTER
const home = require('./routes/home')
app.use('/', home); // use => Middle웨어를 등록해주는 Method!

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT}!!`);
});

module.exports = app;