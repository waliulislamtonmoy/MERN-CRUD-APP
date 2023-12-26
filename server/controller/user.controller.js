require("dotenv").config();
const User = require("../model/user.model");
const { v4: uuidv4 } = require("uuid");
const GetAllUser = async (req, res) => {
  try {
    const AllUser = await User.find();
    res.status(200).json({
      status: "success",
      message: "Found All User Data",
      data: AllUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "success",
      message: "Not Found All User Data",
    });
  }
};

const GetOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "success",
      message: "not found the user",
    });
  }
};

const CreateUser = async (req, res) => {
  const email = await User.findOne({ email: req.params.email });
  if (email) return res.status(200).send("user olrady exist");
  try {
    const newUser = new User({
      id: uuidv4(),
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json({
      status: "success",
      message: "Create New User ",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: "success",
      message: "User Olrady exist",
    });
  }
};

const UpdateOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.username = req.body.username;
    user.name = req.body.name;
    user.email = req.body.email;
    user.age = Number(req.body.age);

    await user.save();
    res.status(201).json({
      status: "success",
      message: "update user successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "success",
      message: "not found the user",
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      status: "success",
      message: " delete user",
    });
  } catch (error) {
    res.status(500).json({
      status: "success",
      message: "not found user for delete",
    });
  }
};

module.exports = {
  GetAllUser,
  GetOneUser,
  CreateUser,
  UpdateOneUser,
  DeleteUser,
};
