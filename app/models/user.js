const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    unique: [true, "name should be unique"],
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return "invalid email format";
      },
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
    maxlength: 124,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message: function () {
        return "password must be contain atleast 1 uppercase 1 lowercase 1 symbol 1 number";
      },
    },
  },
  role: {
    type: String,
    default: "user",
    enum: [admin, shopkeeper, resident],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
