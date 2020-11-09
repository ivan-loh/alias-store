'use strict';

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.jsonp(Date.now());
});

module.exports = router;

