import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
  comment: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 500,
  },
});

export default mongoose.model("Comment", commentSchema);
