const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

// POST request to add a new product
router.post("/addProduct", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET request to fetch all products
router.get("/getProduct", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
