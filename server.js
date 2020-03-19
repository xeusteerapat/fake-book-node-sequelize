const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const friendRoute = require('./routes/friend.js');
const userRoute = require('./routes/user.js');

app.use('/friend', friendRoute);
app.use('/user', userRoute);

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(5000, () => {
      console.log(chalk.green('Server listening on port 5000...'));
    });
  })
  .catch(err => {
    console.log(chalk.red(err));
  });
