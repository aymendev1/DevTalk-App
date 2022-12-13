import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { registerUser } from "../Controllers/AuthController.js";
import UserModel from "../Models/userModel.js";
const Router = express.Router();

Router.post("/register", registerUser);
// Login new User
Router.post("/login", passport.authenticate("local"), (req, res, next) => {
  UserModel.findById(req.user._id)
    .then((user) => {
      // Implementing JWT registration
      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
        },
        process.env.SECRETJWT_TOKEN,
        { expiresIn: process.env.JWT_EXPIRY }
      );
      res.statusCode = 200;
      res.send({ sucess: true, token: token, user: user });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ Message: "error", err: err });
    });
});

export default Router;
