import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../Models/userModel.js";
//Called during login/sign up.
passport.use(new LocalStrategy(UserModel.authenticate()));
//called while after logging in / signing up to set user details in req.user
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
