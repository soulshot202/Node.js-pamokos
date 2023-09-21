import Car from "./models/Car.js";

export async function addNewCar(req, res) {
  const { brand, model } = req.body;
  try {
    const newCar = new Car({ brand, model });

    await newCar.save();
    res.json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
