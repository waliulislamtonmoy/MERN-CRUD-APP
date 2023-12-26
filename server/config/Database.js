const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then((res) => {
    console.log("successfully connect Database");
  })
  .catch((err) => {
    console.log("database is not connected");
  });
