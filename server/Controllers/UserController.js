import UserModel from "../Models/userModel.js";

// get the user from DB
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).json("User not found");
    } else {
      res.status(500).json(error.message);
    }
  }
};

//Update the user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserID, currentUserAdminStatus, oldPassword, newPassword } =
    req.body;
  if (id === currentUserID || currentUserAdminStatus) {
    try {
      // In case the data to update is password and other data
      if (oldPassword || newPassword) {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        user.changePassword(oldPassword, newPassword, function (err) {
          if (err) {
            if (err.name === "IncorrectPasswordError") {
              res.json({ success: false, message: "Incorrect password" }); // Return error
            } else if (err.name === "MissingPasswordError") {
              res.json({
                success: false,
                message: "No Password was given",
              });
            }
          } else {
            res.status(200).json({
              success: true,
              message: "Your password has been changed successfully",
              user,
            });
          }
        });
      } else {
        // In case the data to update isn't password
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).send({ success: true, user });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(403).json({ message: "Access Denied ! " });
  }
};
//Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserID, currentUserAdminStatus } = req.body;
  if (currentUserID || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res
        .status(200)
        .send({ success: true, message: "User Deleted Successfully" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(403).json({ message: "Access Denied !" });
  }
};

//Follow a User
export const followUser = async (req, res) => {
  const id = req.params.id; // current user ID
  const { DesiredUserID } = req.body; // The user ID to follow
  if (DesiredUserID === id) {
    res.status(403).json({
      message: "Access Forbidden",
      info: "You cannot follow yourself",
    });
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(DesiredUserID);
      if (!followUser.following.includes(DesiredUserID)) {
        await followUser.updateOne({ $push: { following: DesiredUserID } });
        await followingUser.updateOne({ $push: { followers: id } });
        res.status(200).json("Followed Successfully");
      } else {
        res.status(403).json("User is Already Followed");
      }
    } catch (error) {
      res.status(403).json(error.message);
    }
  }
};
export const unfollowUser = async (req, res) => {
  const id = req.params.id; // current user ID
  const { DesiredUserID } = req.body; // The user ID to follow
  if (DesiredUserID === id) {
    res.status(403).json({
      message: "Access Forbidden",
      info: "You cannot follow yourself",
    });
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(DesiredUserID);
      if (followUser.following.includes(DesiredUserID)) {
        await followUser.updateOne({ $pull: { following: DesiredUserID } });
        await followingUser.updateOne({ $pull: { followers: id } });
        res.status(200).json("Unfollowed Successfully");
      } else {
        res.status(403).json("User is not Followed");
      }
    } catch (error) {
      res.status(403).json(error.message);
    }
  }
};
