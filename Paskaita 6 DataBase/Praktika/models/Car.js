import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
});

const CarModel = mongoose.model("Car", carSchema);

export default CarModel;
