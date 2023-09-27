import mongoose from "mongoose";
import User from "./models/User.js";
import Comment from "./models/Comment.js";

export async function addUser(req, res) {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function addComments(req, res) {
  const { comment, user_id } = req.body;
  try {
    const userMongoId = new mongoose.Types.ObjectId(user_id);
    const koment = new Comment({ comment, user_id: userMongoId });

    await koment.save();
    res.status(201).json(koment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteCommentsById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Comment.findByIdAndDelete(id);
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getAllUsers(req, res) {
  try {
    const users = await User.find({});

    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function getAllComments(req, res) {
  try {
    const comments = await Comment.find(
      {},
      { comment: 1, _id: 0, Date: 1 }
    ).populate({
      path: "user_id",
      select: "name",
    });
    res.status(201).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
