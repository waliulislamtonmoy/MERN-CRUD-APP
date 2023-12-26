const express = require("express");
const UserRouter = express.Router();

const {
  GetAllUser,
  GetOneUser,
  CreateUser,
  UpdateOneUser,
  DeleteUser,
} = require("../controller/user.controller");

UserRouter.get("/", GetAllUser);
UserRouter.get("/:id", GetOneUser);
UserRouter.post("/", CreateUser);
UserRouter.patch("/:id", UpdateOneUser);
UserRouter.delete("/:id", DeleteUser);

module.exports = UserRouter;
