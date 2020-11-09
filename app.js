'use strict';


const {
  APP_PORT
} = require('./config/config');


const express = require('express');
const app     = express();


require('./config/express')(app);

app.listen(APP_PORT, () => {
  console.log('App started listening on ' + APP_PORT + " ... ");
});
