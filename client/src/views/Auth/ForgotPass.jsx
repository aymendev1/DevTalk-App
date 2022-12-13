import React from "react";
import { MdMail } from "react-icons/md";
import "./Auth.css";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { ReactComponent as MailBox } from "../../assests/mailbox.svg";
export default function ForgotPass() {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth">
      <div>
        <Logo className="mailBox" />
        <span> DEV TALK</span>
      </div>
      <form onSubmit={handleSubmit}>
        <MailBox />
        <span>Forgot password?</span>
        <span>
          Please enter your registered email address. We'll send instructions to
          help reset your password.
        </span>
        <div>
          <MdMail />
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Reset instructions</button>
      </form>
    </div>
  );
}
