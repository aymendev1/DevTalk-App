import React from "react";
import { MdMail, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Auth.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
function Login() {
  return (
    <div className="auth">
      <div>
        <Logo />
        <span> DEV TALK</span>
      </div>
      <div>
        <span>Sign In</span>
        <span>Login to connect with your friends</span>
        <div>
          <MdMail />
          <input type="email" placeholder="example@email.com" />
        </div>
        <div>
          <MdVpnKey />
          <input type="password" placeholder="Your lil secret here ..." />
        </div>
        <button>Login</button>
      </div>
      <div>
        <span>
          Don't have an account? <Link to="/register"> Register</Link>{" "}
        </span>
        <Link to="/passwordreset"> Forgot password ?</Link>
      </div>
    </div>
  );
}

export default Login;
