import express, { application } from "express";
import passport from "passport";
import { registerUser } from "../Controllers/AuthController.js";
import UserModel from "../Models/userModel.js";
const Router = express.Router();

Router.post("/register", registerUser);
// Login new User
Router.post("/login", passport.authenticate("local"), (req, res, next) => {
  UserModel.findById(req.user._id).then((user) => {
    res.statusCode = 200;
    res.send({ Message: "loggedin", user: user });
  });
});

export default Router;
