const { v4: uuidv4 } = require("uuid");
const Men = require("../models/userModel");

const handleGetUsers = async (req, res) => {
  try {
    res
      .status(200)
      .send({ success: true, message: "All Users", men: await Men.find() });
  } catch (error) {
    res.status(500).send({ success: false, errMsg: error.message });
  }
};

const handleGetUser = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "One User",
      man: await Men.findOne({ id: req.params.id }),
    });
  } catch (error) {
    res.status(500).send({ success: false, errMsg: error.message });
  }
};

const handleCreateUser = async (req, res) => {
  try {
    const newMan = await new Men({
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
    }).save();
    res.status(201).send({
      success: true,
      message: "A New User has been Created Successfully.",
      info: newMan,
    });
  } catch (error) {
    res.status(500).send({ success: false, errMsg: error.message });
  }
};

const handleUpdateUser = async (req, res) => {
  try {
    const man = await Men.findOne({ id: req.params.id });
    man.username = req.body.username;
    man.email = req.body.email;
    man.phone = req.body.phone;
    await man.save();
    res.status(201).send({
      success: true,
      message: "A Selected User has been Updated Successfully.",
      updatedUser: man,
    });
  } catch (error) {
    res.status(500).send({ success: false, errMsg: error.message });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    await Men.deleteOne({ id: req.params.id });
    res.status(200).send({
      success: true,
      message: "A Selected User has been Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).send({ success: false, errMsg: error.message });
  }
};

module.exports = {
  handleGetUsers,
  handleGetUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
