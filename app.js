// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//body parser
app.use(bodyParser.json());
module.exports = app;
