import express from "express";
import cors from "cors";
const cars = ["Opel", "Volvo", "VW"];

const app = express();
app.use(cors());

app.get(`/cars`, (req, res) => {
  res.send(cars);
});
app.listen(8080, () => console.log("Server running on port 8080"));
