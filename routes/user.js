const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/users/:id', userController.addFiveFromId);

router.post('/users', (req, res) => {
  res.send('Hello User');
});

module.exports = router;
