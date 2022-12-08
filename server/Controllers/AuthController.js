import UserModel from "../Models/userModel.js";

// Registring new User

export const registerUser = async (req, res) => {
  const { username, password, fullName } = req.body;
  try {
    UserModel.register(
      new UserModel({
        username: username,
        fullName: fullName,
      }),
      password,
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
              res.statusCode = 200;
              res.send({ success: true, data: user });
            }
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const loginUser = async (req, res, next) => {
  console.log;
  UserModel.findById(req.user._id).then((user) => {
    res.statusCode = 200;
    res.send({ Message: "loggedin", user: user });
  });
};
