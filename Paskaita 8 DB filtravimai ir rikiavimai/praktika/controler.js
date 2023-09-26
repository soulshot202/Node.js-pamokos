import Pet from "./models/Pet.js";
// import mongoose from "mongoose";

export async function addPet(req, res) {
  const { name, type, age } = req.body;
  try {
    const newPet = new Pet({ name, type, age });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getPets(req, res) {
  try {
    const pets = await Pet.find({}, { __v: 0 });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getPetByType(req, res) {
  const { type } = req.params;
  try {
    const pets = await Pet.find({ type }, { __v: 0 });
    res.status(201).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getPetsByAge(req, res) {
  const { params } = +req.par;
  console.log(params);
  try {
    const pets = await Pet.find().sort({ age: -1 });
    console.log(params);
    res.status(201).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
