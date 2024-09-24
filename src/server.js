const express = require("express");
const crypto = require("crypto");

const server = express();
const leaked = [];

server.get("/", (req, res) => {
  if (req.query.size) {
    crypto.randomBytes(Number(req.query.size), (err, buff) => {
      leaked.push(buff);
    });
  }

  res.send(process.memoryUsage());
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
