'use strict';


const {
  PORT
} = require('./config/config');


const express = require('express');
const app     = express();


require('./config/express')(app);

app.listen(PORT, () => {
  console.log('App started listening on ' + PORT + " ... ");
});
