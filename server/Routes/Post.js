import express from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
  deleteCommentPost,
} from "../Controllers/PostController.js";

const router = express.Router();
router.get("/:postID", getPost);
router.post("/", createPost);
router.put("/:postID", updatePost);
router.delete("/:postID", deletePost);

// Like and Dislike Post
router.put("/:postID/like", likePost);
// Comment Post
router.put("/:postID/comment", commentPost);
router.delete("/:postID/comment", deleteCommentPost);

export default router;