'use strict';

const path = require('path');

const {
  NODE_ENV = 'development',
  ROOT = path.normalize(__dirname + '/../'),
  PORT = 8080
} = process.env;

module.exports = {
  NODE_ENV,
  ROOT,
  PORT
};
