const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const storeSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  contact: {
    type: String,
    required: [true, "details is required"],
    minlength: 10,
    maxlength: 10,
  },
  timing: {
    type: String,
    required: [true, "timing is required"],
  },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
