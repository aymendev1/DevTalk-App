import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import passport from "passport";
import * as localStrategy from "./middleware/passportLocal.js";
import session from "express-session";
import AuthRoute from "./Routes/Auth.js";
import UserRoute from "./Routes/User.js";
import PostRoute from "./Routes/Post.js";

//Routes
const app = express();

//Middleware
dotenv.config({ path: "./config/.env" });

app.use(passport.initialize());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Listening at " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Usage of Route
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
