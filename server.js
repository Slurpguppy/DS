const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://wlratkowski:zSTMj7D7Xm0U68Q4@wlr-del.3dvyb.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User sign Data Schema
const DataSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  number: String,
  address: String,
});

const DataModel = mongoose.model("User", DataSchema);

// Product add Data Schema
const AddProductSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productCategory: String,
  productAddedAt: { type: Date, default: Date.now },
});

const AddProductModel = mongoose.model("Product", AddProductSchema);

// POST request to add a new user
app.post("/addUser", async (req, res) => {
  try {
    const newUser = new DataModel(req.body);
    await newUser.save();
    res.status(201).json({ message: "User saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all users
app.get("/getUsers", async (req, res) => {
  try {
    const users = await DataModel.find(); // Fetch all users
    res.status(200).json(users); // Return users as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST request to add a new Product
app.post("/addProduct", async (req, res) => {
  try {
    const newProduct = new AddProductModel(req.body);
    await newProduct.save(); // Fixed variable name here
    res.status(201).json({ message: "Product saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all Products
app.get("/getProduct", async (req, res) => {
  try {
    const product = await AddProductModel.find(); // Fetch all products
    res.status(200).json(product); // Fixed variable name here
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
