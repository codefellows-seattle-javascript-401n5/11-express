'use strict';

import dotenv from 'dotenv';
dotenv.config();

// Turn us into ES6!!
//gets the newest features;
//rewrites code; turns code into oldschool javascript.  
import 'babel-register';

// This will require our "app.js" file and immediately call its 'start' method, sending the port from our .env
import app from './src/app';
app.start(process.env.PORT);