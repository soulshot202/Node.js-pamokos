import express from "express";
import { people } from "./db.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ people });
});

router.post(`/`, (req, res) => {
  const lastId = people[people.length - 1].id;
  const { name, age, gender } = req.body;
  console.log(name, age, gender);
  people.push({ name, age, gender, id: lastId + 1 });
  res.json(people);
});
router.delete(`/:id`, (req, res) => {
  const id = req.param.id;
  const index = people.findIndex((person) => person.id == id);
  people.splice(index, 1);

  res.json({ message: "person deleted" });
});

router.put(`/:id`, (req, res) => {
  const id = req.params.id;
  const { name, age, gender } = req.body;
  const index = people.findIndex((person) => person.id == id);
  people[index] = {
    ...people[index],
    name,
    age,
    gender,
  };
  res.json(people);
});

export default router;
