const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  res.clearCookie('user_id', {path: '/', domain: 'localhost'}).send();
});

module.exports = router;
