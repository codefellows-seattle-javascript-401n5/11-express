'use strict';

let http = require('http');

const router = require('../lib/router.js');
require('../src/api/api.js');


let isRunning = false;

const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) { throw err; }
        isRunning = true;
        console.log('server is up on port', port);
      });
    }
    else {
      console.log('server is already running');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('server has been stopped');
    });
  },
};