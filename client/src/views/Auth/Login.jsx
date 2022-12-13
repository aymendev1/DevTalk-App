import React from "react";
import { useDispatch } from "react-redux";
import { MdMail, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Auth.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { logIn } from "../../actions/Auth";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn([{ username: email, password: password }]));
  };
  return (
    <div className="auth">
      <div>
        <Logo />
        <span> DEV TALK</span>
      </div>
      <form onSubmit={handleSubmit}>
        <span>Sign In</span>
        <span>Login to connect with your friends</span>
        <div>
          <MdMail />
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <MdVpnKey />
          <input
            type="password"
            placeholder="Your lil secret here ..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
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
