import mongoose from "mongoose";
import User from "./models/User.js";
import Service from "./models/Service.js";

export async function addService(req, res) {
  const { name, description, price } = req.body;
  try {
    const service = new Service({ name, description, price });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function addUser(req, res) {
  const { name, surname, email, service_id } = req.body;
  try {
    const serviceMongoId = new mongoose.Types.ObjectId(service_id);

    const user = new User({ name, surname, email, service_id: serviceMongoId });
    await user.save();

    const service = await Service.findById(service_id);
    service.users_id.push(user._id);
    await service.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllUsers(req, res) {
  const { order } = req.params;

  try {
    const users = await User.find({})
      .populate("service_id")
      .sort({ name: order });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getServices(req, res) {
  try {
    const services = await Service.find({});
    res.status(201).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteServiceById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Service.findByIdAndDelete(id);
    const users = await User.find({ service_id: id });
    console.log(users);

    const query = { _id: { $in: users } };
    const update = {
      $unset: { service_id: 1 },
    };

    await User.updateMany(query, update);
    res.json(`Membership ${deleted.name} with id ${deleted._id} was deleted`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
