const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const residentSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  mobile: {
    type: String,
    required: [true, "mobile is required"],
    minlength: 10,
    maxlength: 10,
  },
  block: {
    type: String,
    required: [true, "block is required"],
  },
  doorNumber: {
    type: String,
    required: [true, "doorNumber is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  isApproved: {
    type: Boolean,
    required: [true, "approval is required"],
    default: false,
  },
  residentType: {
    type: String,
    required: [true, "resident type is required"],
    enum: ["owner", "tenant"],
  },
});

const Resident = mongoose.model("Resident", residentSchema);

module.exports = Resident;
