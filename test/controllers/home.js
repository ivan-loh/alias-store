'use strict';


const chai = require('chai');
const chaiHttp = require('chai-http');
const app  = require('../../app').app;


chai.use(chaiHttp);
chai.should();


describe('controller - /', () => {

  it('should respond', done => {
    chai
      .request(app)
      .get('/')
      .then( res => {
        res.should.have.status(200);
        done();
      });
  });

});
