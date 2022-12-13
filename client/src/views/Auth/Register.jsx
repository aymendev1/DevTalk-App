import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";
import { MdMail, MdVpnKey } from "react-icons/md";
import { FaUserCircle, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Auth.css";
import { Register } from "../../actions/Auth";
import { ReactComponent as Logo } from "../../assests/logo.svg";
function RegisterAuth() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleSAubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesn't match, please try again !",
      });
    } else {
      dispatch(
        Register({ username: email, password: password, fullName: name })
      );
    }
  };
  return (
    <div className="auth">
      <div>
        <Logo />
        <span> DEV TALK</span>
      </div>
      {loading === true ? (
        <div className="loaderContainer">
          <InfinitySpin width="200" color="#a875fe" />
        </div>
      ) : (
        <form onSubmit={handleSAubmit}>
          <span>Create an account</span>
          <span>Created for developers to developers by developers</span>
          <div>
            <FaUserCircle />
            <input
              type="text"
              placeholder="Your full name here ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <MdMail />
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="username"
            />
          </div>
          <div>
            <MdVpnKey />
            <input
              type="password"
              placeholder="Your lil secret here ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <MdVpnKey />
            <input
              type="password"
              placeholder="Confirm your lil secret here ..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Create An Account</button>
          <button>
            <FcGoogle />
            Sign up with Google
          </button>
          <button>
            <FaGithub />
            Sign up with Github
          </button>
        </form>
      )}
      <div>
        <span>
          Already have an account? <Link to="/login"> Login</Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default RegisterAuth;
