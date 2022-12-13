import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const Login = (formData) => API.post("auth/login", formData);
export const Register = (formData) => API.post("auth/register", formData);
