import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userID) => API.get(`user/${userID}`);
