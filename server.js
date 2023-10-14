const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.redirect(301, process.env.AASHNAA_RESUME_URL);
});

app.get("/resume", (req, res) => {
  res.redirect(301, process.env.AASHNAA_RESUME_URL);
});

app.all("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
