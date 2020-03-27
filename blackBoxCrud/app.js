const app = require("express")();
const UserController = require("./UserController");
const { findUser } = require("./UserMiddleware");

app.get("/users", UserController.index);
app.post("/users", UserController.show);
app.get("/users/:id", [findUser, UserController.show]);
app.delete("/users/:id", [findUser, UserController.delete]);

module.exports = app;
