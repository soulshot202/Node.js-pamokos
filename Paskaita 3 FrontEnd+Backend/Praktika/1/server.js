import express from "express";
import cors from "cors";

const cars = ["Opel", "Niva", "Skoda", "Audi", "Nissan"];
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get(`/`, (req, res) => {
  res.json(cars);
});
app.post(`/`, (req, res) => {
  const newEl = req.body.make;
  cars.push(newEl);
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
