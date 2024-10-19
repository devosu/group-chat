// import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

// create a new express application that will serve as our server
const app = express();

// parse application/json
app.use(bodyParser.json());
