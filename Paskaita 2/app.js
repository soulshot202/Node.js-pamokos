import Express from "express";

const people = ["Alex", "Rose", "Megan"];
const PORT = 3000;
const app = Express();

app.use(Express.json());

app.get(`/api/users`, (req, res) => {
  console.log(req);
  res.json({ people });
});
app.get("/api/users/:firstLetter", (req, res) => {
  const firstLetter = req.params.firstLetter;
  console.log(firstLetter);
  const filtered = people.filter((person) => person[0] === firstLetter);
  res.json(filtered);
});
app.post(`/api/users`, (req, res) => {
  const name = req.body.name;
  people.push(name);
  res.json(people);
});

app.listen(PORT, () => {
  console.log("server is running in port 3000");
});
