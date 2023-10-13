const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.redirect(
    301,
    "https://drive.google.com/file/d/1PXjwx4AYp2vCoG2UQ65sCm5IciUhBlEX/view?usp=sharing"
  );
});

app.get("/resume", (req, res) => {
  res.redirect(
    301,
    "https://drive.google.com/file/d/1PXjwx4AYp2vCoG2UQ65sCm5IciUhBlEX/view?usp=sharing"
  );
});

app.all("*", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
