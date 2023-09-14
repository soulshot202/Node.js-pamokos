import express from "express";
import cors from "cors";

let people = [
  { name: "Vytas", surname: "Berzas" },
  { name: "Jonas", surname: "Ponas" },
  { name: "Reda", surname: "Kuose" },
  { name: "Audra", surname: "Bebre" },
];

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get(`/`, (req, res) => {
  res.json(people);
});
app.post(`/`, (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;

  const newPpl = {
    name: name,
    surname: surname,
  };
  people.push(newPpl);
  res.json(people);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
