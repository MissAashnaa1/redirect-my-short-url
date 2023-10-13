const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/resume", (req, res) => {
  res.redirect(
    301,
    "https://drive.google.com/file/d/1Tr9TbRKL2p6SIFER53h6d1V-W3cmeocj/view"
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
