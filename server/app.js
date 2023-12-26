const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const UserRouter = require("./routes/user.router");
app.use("/api/user/", UserRouter);

app.get("/", (req, res) => {
  res.send("<h1>successfully run the server</h1>");
});

app.use((req, res, next) => {
  res.status(400).json({
    status: "success",
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "Server Not Found",
  });
});
module.exports = app;
