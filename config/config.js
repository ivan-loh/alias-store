'use strict';

const path = require('path');

const {

  NODE_ENV = 'development',
  ROOT = path.normalize(__dirname + '/../'),
  PORT = 8080,

  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_PASSWORD

} = process.env;

module.exports = {

  NODE_ENV,
  ROOT,
  PORT,

  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD

};
