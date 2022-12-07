import React from "react";
import { MdMail, MdVpnKey } from "react-icons/md";
import { FaUserCircle, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Auth.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
function Register() {
  return (
    <div className="auth">
      <div>
        <Logo />
        <span> DEV TALK</span>
      </div>
      <div>
        <span>Create an account</span>
        <span>Created for developers to developers by developers</span>
        <div>
          <FaUserCircle />
          <input type="text" placeholder="Your username here ..." />
        </div>
        <div>
          <MdMail />
          <input type="email" placeholder="example@email.com" />
        </div>
        <div>
          <MdVpnKey />
          <input type="password" placeholder="Your lil secret here ..." />
        </div>
        <button>Create An Account</button>
        <button>
          <FcGoogle />
          Sign up with Google
        </button>
        <button>
          <FaGithub />
          Sign up with Github
        </button>
      </div>
      <div>
        <span>
          Already have an account? <Link to="/login"> Login</Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default Register;
