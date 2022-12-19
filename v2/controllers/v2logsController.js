express = require("express");
v2logs = express.Router();
const logsArray = require("../../models/log");

v2logs.get("/", (req, res) => {
  const mappedLi = logsArray.map((log, index) => {
    return `<li>
        <a href=/v2/logs/${index}>${log.title}</a>
      </li>`;
  });
  res.send(`<ul> ${mappedLi}  </ul>`);
});

v2logs.get("/:i", (req, res) => {
  const { i } = req.params;
  res.send(logsArray[i]);
});

module.exports = v2logs;
