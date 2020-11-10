'use strict';

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.jsonp({message:'what up ?', ip: req.ip});
});

module.exports = router;
