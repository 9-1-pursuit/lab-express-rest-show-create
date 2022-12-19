const express = require('express');
const log = express.Router();
const logsArray = require('../Models/log');
const { validateURL, validateObject } = require('../models/validation');

log.get('/', (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  //! 1st bonus

  if (order === 'asc') {
    // console.log(sortAsc);
    const sortAsc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return -1;
      } else if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(sortAsc);
  } else if (order === 'desc') {
    const desc = logsArray.sort((a, b) => {
      if (a.captainName.charAt(0) > b.captainName.charAt(0)) {
        return -1;
      } else if (a.captainName.charAt(0) < b.captainName.charAt(0)) {
        return 1;
      } else {
        return 0;
      }
    });
    res.json(desc);
  } else if (mistakes === 'true') {
    const filterMistakes = logsArray.filter(
      (a) => a.mistakesWereMadeToday === true
    );
    res.json(filterMistakes);
  } else if (mistakes === 'false') {
    const mistakeFalse = logsArray.filter(
      (b) => b.mistakesWereMadeToday === false
    );
    res.json(mistakeFalse);
  } else if (lastCrisis === 'gte20') {
    const twentyDaysAndMore = logsArray.filter(
      (c) => c.daysSinceLastCrisis >= 20
    );
    res.json(twentyDaysAndMore);
  } else if (lastCrisis === 'gt10') {
    const tenDaysAndMore = logsArray.filter((a) => a.daysSinceLastCrisis > 10);
    res.json(tenDaysAndMore);
  } else if (lastCrisis === 'lte5') {
    const lessThanFiveDays = logsArray.filter(
      (a) => a.daysSinceLastCrisis <= 5
    );
    res.json(lessThanFiveDays);
  } else {
    res.json(logsArray);
  }
  console.log(validateObject(logsArray[0].captainName.slice(0)));
});

log.post('/', validateURL, (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

log.get('/:index', (req, res) => {
  const { index } = req.params;
  const { a, b } = req.query;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect('/*');
  }
});

log.delete('/:id', (req, res) => {
  logsArray.pop(req.body);
  res.json(logsArray.at({ id }));
  //   res.json(logsArray.at(-1));
});

//! 3rd bonus
log.put('/:id', validateURL, (req, res) => {
  if (logsArray[req.params.id]) {
    logsArray[req.params.id] = req.body;
    res.status(200).json(logsArray[req.params.id]);
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
});

module.exports = log;
