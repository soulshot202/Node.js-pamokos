import { data } from "./db.js";

export function getData(req, res) {
  res.send(data);
}

export function getMake(req, res) {
  const { make } = req.params;

  res.json(data.filter((e) => e.car === make));
}

export function getUserById(req, res) {
  const { id } = req.params;
  const person = data.filter((e) => e.id === +id);
  res.json(person);
}

export function getEmails(req, res) {
  const emails = data.map((e) => {
    return e.email;
  });
  res.json(emails);
}

export function getWomans(req, res) {
  const womans = data.filter((e) => e.gender === "Female");
  const names = womans.map((e) => {
    return e.first_name + " " + e.last_name;
  });
  res.json(names);
}
