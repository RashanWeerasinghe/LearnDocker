var express = require("express");

var app = express();

var port = 3000;

app.get("/", function (req, res) {
  res.send("Hello rashan Weerasinghe");
});

app.listen(port, function () {
  console.log("server started on port 3000");
});
