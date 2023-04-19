const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  inStock: {
    type: Boolean,
    required: [true, "inStock is required"],
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    required: [true, "storeId is required"],
  },
  unit: {
    type: String,
    required: [true, "unit is required"],
    enum: ["gms", "kgs", "ltr", "piece", "pack", "dozen", "meter"],
  },
  isVeg: {
    type: Boolean,
    required: [true, "isVeg is required"],
  },
  //image
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
