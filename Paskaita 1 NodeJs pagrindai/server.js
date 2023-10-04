// npm init -y sukuria node aplikacija
// npm run paleidzia skripta is package.json
// npm install [package pavadinimas] suinstaliuoja npm package
// npm install --save-dev [package pavadinimas] suinstaliuoja npm package kaip dev dependency
// npm install -g [package pavadinimas] suinstaliuoja npm package globaliai
// nodemon [failo pavadinimas.js] paleidzia aplikacija
// npm install atsiuncia visus package is package.json

import Express from "express";
const app = Express();

app.get(`/test`, (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(3000, () => {
  console.log("server running on PORT 3000");
});
