import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from "mongoose";

// Create new Post
export const createPost = async (req, res) => {
  // Getting Content , image and UserID
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json({ status: true, message: "Post Created" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
// Get new Post
export const getPost = async (req, res) => {
  const PostID = req.params.postID;
  try {
    const post = await PostModel.findById(PostID);
    res.status(200).json(post);
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).json({ status: false, message: "Post not found" });
    } else {
      res.status(500).json({ status: false, message: error });
    }
  }
};
// Update Post
export const updatePost = async (req, res) => {
  const PostID = req.params.postID;
  const { userID } = req.body;
  try {
    const post = await PostModel.findById(PostID);
    if (post.userID === userID) {
      await post.updateOne({ $set: req.body });
      res
        .status(200)
        .json({ status: true, message: "Post Updated successfully" });
    } else {
      res.status(403).json({ status: false, message: "Access Denied" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).json({ status: false, message: "Post not found" });
    } else {
      res.status(500).json({ status: false, message: error });
    }
  }
};

// Delete Post
export const deletePost = async (req, res) => {
  const PostID = req.params.postID;
  const { userID } = req.body;
  try {
    const post = await PostModel.findById(PostID);
    if (post.userID === userID) {
      await post.deleteOne();
      res
        .status(200)
        .json({ status: true, message: "Post Deleted successfully" });
    } else {
      res.status(403).json({ status: false, message: "Access Denied" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).json({ status: false, message: "Post not found" });
    } else {
      res.status(500).json({ status: false, message: error });
    }
  }
};

// Like or Dislike post
export const likePost = async (req, res) => {
  const PostID = req.params.postID;
  const { userID } = req.body;
  try {
    const post = await PostModel.findById(PostID);
    if (!post.likes.includes(userID)) {
      //Like post
      await post.updateOne({ $push: { likes: userID } });
      res.status(200).json({ status: true, message: "Post Liked" });
    } else {
      // Dislike Post
      await post.updateOne({ $pull: { likes: userID } });
      res.status(200).json({ status: true, message: "Post Disliked" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(404).json({ status: false, message: "Post not found" });
    } else {
      res.status(500).json({ status: false, message: error });
    }
  }
};

// Comment post
export const commentPost = async (req, res) => {
  const PostID = req.params.postID;
  const { userID, comment } = req.body;
  try {
    const post = await PostModel.findById(PostID);
    //comment post
    await post.updateOne({
      $push: {
        comments: {
          _id: new mongoose.Types.ObjectId(),
          userID: userID,
          content: comment,
        },
      },
    });

    res.status(200).json({ status: true, message: "Post Commented" });
  } catch (error) {
    if (error.name === "CastError") {
      res
        .status(404)
        .json({ status: false, message: "Post not found", info: error });
    } else {
      res.status(500).json({ status: false, message: error });
    }
  }
};

// Delete Comment post
export const deleteCommentPost = async (req, res) => {
  const PostID = req.params.postID;
  const { userID, commentID } = req.body;
  try {
    const post = await PostModel.findById({
      _id: PostID,
      "comments._id": commentID,
    });
    if (post.userID === userID) {
      await post
        .updateOne({ $pull: { comments: { _id: commentID } } })
        .then(() => {
          res.status(200).json({ status: true, message: "Comment Deleted" });
        })
        .catch((err) => {
          res.status(404).json({ status: false, message: "Comment not found" });
        });
    } else {
      res.status(403).json({ status: false, message: "Access Denied" });
    }
    //await PostModel.findOneAndUpdate(
    //  {
    //    _id: PostID,
    //    "comments._id": commentID,
    //  },
    //  { $pull: { comments: { _id: commentID } } }
    //).then(() => {
    //  res.status(200).json({ status: true });
    //});
  } catch (error) {
    if (error.name === "CastError") {
      res
        .status(404)
        .json({ status: false, message: "Post not found", info: error });
    } else {
      console.log(error);
      res.status(500).json({ status: false, error });
    }
  }
};

// getTimeSlaps post
export const getTimeSlapsPost = async (req, res) => {
  const userID = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userID: userID });
    const followingPosts = await UserModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userID) } },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userID",
          as: "followingPosts",
        },
      },
      { $project: { followingPosts: 1, _id: 0 } },
    ]);
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b - createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};
