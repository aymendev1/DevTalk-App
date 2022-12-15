import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createPost = (postData) => API.post("post/", postData);
export const getTimelinePosts = (userID) => API.get(`/post/${userID}/timeline`);
