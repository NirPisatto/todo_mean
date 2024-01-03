var express = require('express');
const app = express();


const userRoute = require('./user');
const publicRoute = require('./public');
// const uploadRoute = require('./upload');
const taskRoute = require('./task');



app.use('/users', userRoute)
app.use('/public', publicRoute)
app.use('/tasks', taskRoute) 
// app.use('/upload', uploadRoute)

module.exports = app;
    