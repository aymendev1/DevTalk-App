import UserModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
// Registring new User

export const registerUser = async (req, res) => {
  try {
    let username = req.body.username;
    const user = await UserModel.findOne({ username });
    if (user) {
      res.statusCode = 400;
      res.send({
        message: "Registration Failed",
        info: "username or email already exist",
      });
    } else {
      UserModel.register(
        new UserModel({
          username: req.body.username,
          fullName: req.body.fullName,
        }),
        req.body.password,
        (err, user) => {
          if (err) {
            res.statusCode = 500;
            res.send({ message: "Registration Failed", info: err });
          } else {
            user.save((err, user) => {
              if (err) {
                res.statusCode = 500;
                res.send({ message: "Registration Failed", info: err });
              } else {
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
                res.send({ success: true, token: token, data: user });
              }
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const loginUser = async (req, res, next) => {
  UserModel.findById(req.user._id).then((user) => {
    res.statusCode = 200;
    res.send({ Message: "loggedin", user: user });
  });
};
