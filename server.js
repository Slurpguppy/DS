const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());









// START MONGO CONECTTION

const uri = "mongodb+srv://wlratkowski:zSTMj7D7Xm0U68Q4@wlr-del.3dvyb.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// END MONGO CONECTTION














//START USER DATA SCHEMA

// User sign Data Schema
const DataSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  number: String,
  address: String,
});

const DataModel = mongoose.model("User", DataSchema);

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

//END USER DATA SCHEMA
















//START PRODUCT DATA SCHEMA

// Product add Data Schema
const AddProductSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productCategory: String,
  productAddedAt: { type: Date, default: Date.now },
});

const AddProductModel = mongoose.model("Product", AddProductSchema);



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

// edit product reqrest. // PUT request to update product details by productName
app.put("/updateProduct/:productName", async (req, res) => {
  try {
    const updatedProduct = await AddProductModel.findOneAndUpdate(
      { productName: req.params.productName }, // Find product by name
      req.body, // Data to update
      { new: true } // Ensure the updated document is returned
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", product: updatedProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE request to delete a product by ID
app.delete("/deleteProduct/:name", async (req, res) => {
  try {
      const productName = req.params.name;
      const result = await ProductModel.findOneAndDelete({ productName: productName });

      if (!result) {
          return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});



//END PRODUCT DATA SCHEMA










// START DRIVER DATA SCHEMA

const DriverSchema = new mongoose.Schema({
  driverName: String,
  driverLastName: String,
  driverEmail: String,
  driverNumber: String,
});

const DriverModel = mongoose.model("Driver", DriverSchema);

// POST request to add a new driver
app.post("/addDriver", async (req, res) => {
  try {
    const newDriver = new DriverModel(req.body); // Corrected model name
    await newDriver.save();
    res.status(201).json({ message: "Driver saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all drivers
app.get("/getDrivers", async (req, res) => {
  try {
    const drivers = await DriverModel.find(); // Corrected model name
    res.status(200).json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// END DRIVER DATA SCHEMA












app.listen(3000, () => console.log("Server running on port 3000"));
