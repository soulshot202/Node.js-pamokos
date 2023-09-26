import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
});

export default mongoose.model("people", peopleSchema);
