'use strict';

import express from 'express';
import morgan from 'morgan';
import router from './api/api.js';
let app = express();
// Express body and URL parsers
//between request and response, it will run this function. Converts the body to JSON and whatever line 9 does.

app.post('*', express.json());
app.put('*', express.json());

app.use(express.urlencoded({extended:true}));

// Our modules -- import the api and "use" it as middleware for express
app.delete('*', (req, res, next) => {
  console.log(req.query)
  console.log(req.params)
  next();
})
app.use( router );

// Flag to know if we are up and going
let isRunning = false;

let server;
 
 const start = (port) => {
  if(! isRunning) {
    server = app.listen(port, (err) => {
      if(err) { throw err; }
      // Tick the running flag
      isRunning = true;
      console.log('Server is up on port', port);
    });
  }
  else {
    console.log('Server is already running');
  }
  }
  const stop = () => {
  server.close( () => {
    isRunning = false;
    console.log('Server has been stopped');
  });
}


export default { start, stop};


