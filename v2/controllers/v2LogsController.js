const express = require("express");
const ejs = require("ejs");
const v2Logs = express.Router();
const logsArray = require("../../models/log");

v2Logs.get("/", (req, res) => {
  const data = logsArray.map((log, index) => {
    return `<li><a style="display: block" href=/v2/logs/${index}>${log.captainName}: ${log.title}</a></li>`;
  });
  res.send(`<ul>${data}</ul>`);

  //EJS ATTEMPT

  // const html = ejs.render(
  //   "<%= logsArray.map((log) => {return log.captainName}) %>",
  //   {
  //     logsArray: logsArray,
  //   }
  // );
  // res.send(html);
});

v2Logs.get("/:index", (req, res) => {
  const { index } = req.params;
  const { title, post, captainName } = logsArray[index];
  res.send(
    `<div style="text-align: center"><h1>${title}</h1><p><em>${captainName}</em></p><p>${post}</p><a href=/v2/logs><button>Back</button></a></div>`
  );
});

module.exports = v2Logs;
