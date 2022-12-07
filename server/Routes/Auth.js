import express, { application } from "express";
import passport from "passport";
import { registerUser } from "../Controllers/AuthController.js";
const Router = express.Router();

Router.post("/register", registerUser);
// Login new User
Router.post("/login", passport.authenticate("local"), (req, res, next) => {
  console.log(res);
  res.statusCode = 200;
  res.send({ message: "Logged In", info: res.user });
});
export default Router;
