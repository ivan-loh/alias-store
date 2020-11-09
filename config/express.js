'use strict';


const {
  ROOT,
  ROOT_CONTROLLER = ROOT + 'app/controllers'
} = require('./config');


const compression = require('compression');
const express     = require('express');
const glob        = require('glob');
const cors        = require('cors');
const helmet      = require('helmet');
const morgan      = require('morgan');


module.exports = app => {


  app.disable('x-powered-by');


  // middlewares
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors());
  app.use(compression());


  // controllers

  app.use('/', require(ROOT_CONTROLLER + "/home.js"));

  glob
    .sync(ROOT_CONTROLLER + '/*.js')
    .forEach(path => {
      const name = path.replace(ROOT_CONTROLLER, '').replace('.js', '');
      app.use(name, require(path));
    });


  // other handlers

  app.use((req, res) => {
    res.status(404);
    res.jsonp({status:404, message: "Not Found"});
  });

  app.use((error, req, res, next) => {
    const { status = 500, message } = error;
    res.status(status);
    res.jsonp({ status, message });
  });


};




