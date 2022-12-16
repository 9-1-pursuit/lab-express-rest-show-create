const express = require('express');
const log = require('./controllers/logsController');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));
app.use('/logs', log);

app.get('/', (req, res) => {
  res.send(`Welcome to the captain's log`);
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});
module.exports = app;
