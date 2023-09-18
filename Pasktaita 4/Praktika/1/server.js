const PORT = 3000;
import { cars } from "./db.js";

import express from "express";
const app = express();
//app.use(express.json());

app.get(`/cars/:make`, (req, res) => {
  const { make } = req.params;
  //const cars2 = JSON.parse(cars);
  //res.send(cars2.filter((e) => e.make));
  res.json({ make: make });
});

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
