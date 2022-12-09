import mongoose from "mongoose";
const PostSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    content: String,
    likes: [],
    image: String,
    comments: {
      _id: { type: mongoose.Schema.Types.ObjectId },
      userID: { type: String, required: true },
      content: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
