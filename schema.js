const mongoose = require("mongoose");

// Define the Profile Schema (for embedded document)
const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// Define the main User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["user"],
  },
  profile: profileSchema,
  lastLogin: {
    type: Date,
  },
});

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
