const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const indexController = require('./controller/indexController');
const employeesController = require('./controller/employeesController');
const graphqlController = require('./controller/graphqlController');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexController);
app.use('/api/employees', employeesController);
app.use('/graphql', graphqlController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }
  console.error('ERROR', err);
  res.status(err.status || 500);
  res.send({ message: err.message });
  return res;
});

module.exports = app;
