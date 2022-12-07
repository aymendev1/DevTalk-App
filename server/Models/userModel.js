import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: { type: String },
    coverPicture: { type: String },
    bio: { type: String },
    address: { type: String },
    relationshipStatus: { type: String },
    followers: {
      type: Array,
    },
    following: {
      type: Array,
    },
  },
  { timestamps: true }
);
userSchema.plugin(passportLocalMongoose);
const UserModel = mongoose.model("Users", userSchema);
export default UserModel;
