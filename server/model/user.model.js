const { mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
