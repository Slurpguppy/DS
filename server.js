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
const DriverSchema = new mongoose.Schema({
  driverName: String,
  driverlastName: String,
  driverEmail: String,
  driverNumber: String,
  driverAddress: String,
});

const DriverModel = mongoose.model("User", DriverSchema);

// Product add Data Schema
const AddProductSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productCategory: String,
  productAddedAt: { type: Date, default: Date.now },
});

const AddProductModel = mongoose.model("Product", AddProductSchema);

// POST request to add a new driver
app.post("/addDriver", async (req, res) => {
  try {
    const newDriver = new DriverModel(req.body);
    await newDriver.save();
    res.status(201).json({ message: "Driver saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all drivers
app.get("/getDrivers", async (req, res) => {
  try {
    const drivers = await DriverModel.find(); // Fetch all drivers
    res.status(200).json(drivers); // Return drivers as a JSON response
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
