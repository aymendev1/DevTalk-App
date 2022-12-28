import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createPost = (postData) => API.post("post/", postData);
export const getTimelinePosts = (userID) =>
  API.get(`/post/all/${userID}/timeline`);
export const likePost = (PostID, userID) =>
  API.put(`post/${PostID}/like`, { userID });
export const commentPost = (PostID, userID, comment) =>
  API.put(`post/${PostID}/comment`, { userID, comment });
