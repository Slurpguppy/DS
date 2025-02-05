const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

// POST request to add a new user
router.post("/addUser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all users
router.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
