const mongoose = require("mongoose");
const validate = require("mongoose-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    full_name: String,
    password: String,
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
      validate: [
        validate({
          validator: "isEmail",
          message: "Not a valid email"
        })
      ]
    },
    role: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
