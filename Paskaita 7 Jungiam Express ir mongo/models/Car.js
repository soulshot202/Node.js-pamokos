import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    min: 1955,
    max: 2023,
  },
  make: {
    type: String,
    required: true,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Car", carSchema);
