const express = require('express');
const friendController = require('../controller/friendController');
const router = express.Router();

router.get('/friends', friendController.sayHi);

router.post('/friends', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
