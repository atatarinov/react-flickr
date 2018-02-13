'use strict';

const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { resolve } = require('path');

app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static file-serving middleware
app.use(express.static(resolve(__dirname, '..', 'public')));

app.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

// sends index.html for any requests that don't match API routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`The server is listening on port ${port}`);
});
