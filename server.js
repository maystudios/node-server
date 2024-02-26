// create a simple server with express on port 3000 which do ping pong
const express = require("express");
const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  console.log("ping" + "send by " + req.ip);
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

function ping() {
  fetch("http://localhost:3000/ping")
    .then((res) => res.text())
    .then((res) => console.log(res));
}

function newRoute(name) {
  app.get("/" + name, (req, res) => {
    console.log(name + "send by " + req.ip);
    res.send("pong");
  });
}
