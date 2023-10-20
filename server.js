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

app.get("/hms-video", (req, res) => {
  res.redirect(301, process.env.AASHNAA_HMS_YT);
});

app.get("/ecomm-github", (req, res) => {
  res.redirect(301, process.env.AASHNAA_E_COMM_GITHUB);
});

app.get("/gs-certificate", (req, res) => {
  res.redirect(301, process.env.AASHNAA_GOLDMANSACHS_CERTIFICATE);
});

app.get("/pi-certificate", (req, res) => {
  res.redirect(301, process.env.AASHNAA_PREPINSTA_CERTIFICATE);
});

app.all("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
