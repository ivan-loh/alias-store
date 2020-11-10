'use strict';

const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD
} = require('../../config/config');


const { promisify } = require('util');
const redis = require('redis');


const clientOptions = {
  host: REDIS_HOST,
  port: REDIS_PORT
};

if (REDIS_PASSWORD) {
  clientOptions.password = REDIS_PASSWORD;
};



const client = redis.createClient(clientOptions);
const clientAsync = {};

for (let funcName in client) {

  if (typeof client[funcName] !== 'function') {
    continue;
  }

  const funcAsync = promisify(client[funcName]).bind(client);
  clientAsync[funcName] = funcAsync;

}

const getAsync  = promisify(client.get).bind(client);
const setAsync  = promisify(client.set).bind(client);
const quitAynsc = promisify(client.quit).bind(client);

module.exports = {

  get: clientAsync.get,
  set: clientAsync.set,

  deletePattern: async (key) => {

    const keys = await clientAsync.keys(key);

    for (let idx in keys ) {
      await clientAsync.del(keys[idx]);
    }

  },

  quit: clientAsync.quit

};

