'use strict';


const chai = require('chai');
const chaiHttp = require('chai-http');
const app  = require('../../app').app;


chai.use(chaiHttp);
chai.should();


describe('controller - /', () => {

  it('should respond with something', async () => {

    const res = await chai.request(app).get('/');

    res.should.have.status(200);
    res.body.should.not.be.empty;

    return;

  });

});
