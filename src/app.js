const express = require('express');
const path = require('path');
var cors = require('cors')
const parentTaskRouter = require('./routers/parentTask');
const todoListRouter = require('./routers/todoList');

require('./db/mongoose');

const app= express();

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.use(parentTaskRouter);
app.use(todoListRouter);


module.exports = app