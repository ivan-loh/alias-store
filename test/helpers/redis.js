'use strict';



const chai        = require('chai');
const uuid        = require('uuid').v4;
const redisHelper = require('../../app/helpers/redis');


chai.should();


describe('helpers - redis', () => {

  const REDIS_PREFIX = uuid();

  it('should be able to set and get', async () => {

    const key   = REDIS_PREFIX + ":" + uuid();
    const value = uuid();

    await redisHelper.set(key, value);
    const getOperationResult = await redisHelper.get(key);

    getOperationResult.should.be.equal(value);

  });

  after(async () => {
    await redisHelper.deletePattern(REDIS_PREFIX + "*");
    await redisHelper.quit();
  });

});
