const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const customers = require('./routes/customers');
const teetimes = require('./routes/teetimes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/customers', customers);
app.use('/appointments', appointments);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
