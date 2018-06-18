'use strict';

require('dotenv').config();

require('babel-register');

const PORT = process.env.PORT;
const server = require('./app.js');

server.start(PORT);