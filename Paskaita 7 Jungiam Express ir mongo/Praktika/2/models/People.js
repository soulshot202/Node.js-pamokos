import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export default mongoose.model("people", peopleSchema);
