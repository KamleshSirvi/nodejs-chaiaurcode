const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World! new");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
