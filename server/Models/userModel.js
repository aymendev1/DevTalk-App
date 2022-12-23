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
    profilePicture: { type: String, default: "" },
    coverPicture: { type: String, default: "" },
    bio: { type: String, default: "" },
    address: { type: String, default: "" },
    relationshipStatus: { type: String, default: "" },
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
