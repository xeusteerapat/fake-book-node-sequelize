const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

db.sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server listening on port 5000...');
    });
  })
  .catch(err => {
    console.log(err);
  });
