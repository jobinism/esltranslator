const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const historyRouter = require('./routes/wordHistory');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/posts', historyRouter(dbHelpers));
app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  dbHelpers.getUserByEmail(email).then((user) => {
    if (user.password === password) {
      res.cookie('user_id', user.id)
      res.json({first_name: user.first_name, last_name: user.last_name})
    }
    else {
      res.status(401).json({error: 'Incorrect Credentials'})
    }
  })


});

module.exports = app;
