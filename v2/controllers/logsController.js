const express = require("express");
const app = require("../../app");
const logs = express.Router();
const {
  orderArr,
  filterByCrisis,
  validateData,
  notFound,
} = require("../../functions");
const logsArr = require("../../models/log");

// Index + queries
logs.get("/", (req, res) => {
  let response = [...logsArr];
  const { order, mistakes, lastCrisis } = req.query;
  // Filter by mistakes status
  if (mistakes) {
    response = response.filter(
      (el) => el.mistakesWereMadeToday.toString() === mistakes
    );
  }
  // Filter by last crisis
  if (lastCrisis) {
    response = filterByCrisis(response, lastCrisis);
  }
  // Sort entries
  if (order) {
    orderArr(response, order, "captainName", "title");
  }

  // looking forward to learning how to connect react to back end
  // not a fan of sending html this way
  res.status(200).send(`<ul>
  <li><a style="line-height:2" href="logs/0">Captain: ${response[0].captainName} - Title: ${response[0].title} - Post: ${response[0].post}</a></li>
  <li><a style="line-height:2" href="logs/1">Captain: ${response[1].captainName} - Title: ${response[1].title} - Post: ${response[1].post}</a></li>
  <li><a style="line-height:2" href="logs/2">Captain: ${response[2].captainName} - Title: ${response[2].title} - Post: ${response[2].post}</a></li>
  <li><a style="line-height:2" href="logs/3">Captain: ${response[3].captainName} - Title: ${response[3].title} - Post: ${response[3].post}</a></li>
  <li><a style="line-height:2" href="logs/4">Captain: ${response[4].captainName} - Title: ${response[4].title} - Post: ${response[4].post}</a></li>
  <li><a style="line-height:2" href="logs/5">Captain: ${response[5].captainName} - Title: ${response[5].title} - Post: ${response[5].post}</a></li>
  <li><a style="line-height:2" href="logs/6">Captain: ${response[6].captainName} - Title: ${response[6].title} - Post: ${response[6].post}</a></li>
  </ul>`);
});

// Show
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  res
    .status(200)
    .send(
      `<h1>${logsArr[index].title}</h1><p style="font-style:italic">${logsArr[index].post}</p><p>Mistakes Were Made Today: <span style="font-weight:bold">${logsArr[index].mistakesWereMadeToday}</span> - Days Since Last Crisis: <span style="font-weight:bold">${logsArr[index].daysSinceLastCrisis}</span></p><p>Entry LOG by <span style="font-weight:bold">Captain ${logsArr[index].captainName}</span></p><br/><button onclick="window.location.href='/v2/logs';">return to logs</button>`
    );
});

// Create
logs.post("/", validateData, (req, res) => {
  logsArr.push(req.body);
  res.status(200).json(logsArr);
});

// Destroy
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  logsArr.splice(index, 1);
  res.status(200).json(logsArr);
});

// Update
logs.put("/:index", validateData, (req, res) => {
  const { index } = req.params;
  if (!logsArr[index]) {
    return notFound(res);
  }
  logsArr[index] = req.body;
  res.status(200).json(logsArr[index]);
});

module.exports = logs;
