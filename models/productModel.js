const mongoose = require("mongoose");

const AddProductSchema = new mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productCategory: String,
  productAddedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", AddProductSchema);

module.exports = Product;
