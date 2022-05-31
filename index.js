const express = require('express');
const indexRouter = require('./routes/indexRouter');
const db = require('./db');
db.connect();
const app = express();

const PORT = 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {console.log('Servidor funcionando')});