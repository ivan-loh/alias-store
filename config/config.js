'use strict';

const path = require('path');

const {
  NODE_ENV = 'development',
  ROOT = path.normalize(__dirname + '/../'),

  APP_PORT = 8080
} = process.env;

module.exports = {
  NODE_ENV,
  ROOT,
  APP_PORT
};
