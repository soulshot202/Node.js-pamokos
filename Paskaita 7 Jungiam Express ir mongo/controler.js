import Car from "./models/Car.js";
import mongoose from "mongoose";

export async function createCar(req, res) {
  const { year, make } = req.body;
  try {
    const newCar = new Car({ year, make });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCars(req, res) {
  const { make, year } = req.query;
  try {
    const query = {};
    if (make) {
      query.make = make;
    }
    if (year) {
      query.year = year;
    }
    const cars = await Car.find(query, { _id: 0, __v: 0 });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCarById(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `invalid id` });
  }
  try {
    const car = await Car.findById(id, { _id: 1, __v: 0 });
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: `Car with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateCar(req, res) {
  const { id } = req.params;
  const { year, make } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `invalid id` });
  }
  try {
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
    await car.save();
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: `Car with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteCarById(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `invalid id` });
  }
  try {
    const car = await Car.findByIdAndDelete(id);
    if (car) {
      res.json({ message: "Car deleted" });
    } else {
      res.status(404).json({ message: `Car with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
